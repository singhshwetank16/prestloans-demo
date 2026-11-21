import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.log('dist directory not found, skipping route copies.');
  process.exit(0);
}

const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.log('dist/index.html not found, skipping.');
  process.exit(0);
}

const indexContent = fs.readFileSync(indexPath, 'utf-8');

const routes = [
  'about',
  'products',
  'calculator',
  'career',
  'customers-stories',
  'employee-testimonials',
  'media',
  'gallery',
  'prestloans-diaries',
  'blog',
  'faq',
  'contact',
  'policies',
  'grievance-redressal',
  'interest-rate-model',
  'fair-practices-code',
  'kyc-and-aml',
  'penal-charges-policy',
  'regulatory-certifications',
  'public-notice',
  'privacy-policy',
  'terms-and-conditions',
  'terms-of-use',
  'disclaimer'
];

// Copy 404.html
fs.writeFileSync(path.join(distDir, '404.html'), indexContent, 'utf-8');

// Create .nojekyll so GitHub Pages does not ignore assets or run Jekyll
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf-8');

// Copy for each route
routes.forEach((route) => {
  // 1. <route>.html
  fs.writeFileSync(path.join(distDir, `${route}.html`), indexContent, 'utf-8');

  // 2. <route>/index.html
  const subDir = path.join(distDir, route);
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir, { recursive: true });
  }
  fs.writeFileSync(path.join(subDir, 'index.html'), indexContent, 'utf-8');
});

// Generate server rewrite configs for standard hosting (Apache/cPanel & Windows IIS)
const htaccessContent = `# PREST LOANS - APACHE / CPANEL PRODUCTION CONFIGURATION
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . index.html [L]
</IfModule>

# Fallback in case mod_rewrite is disabled on host
ErrorDocument 404 index.html

# Ensure proper MIME types for modern JS modules and assets
<IfModule mod_mime.c>
  AddType application/javascript js mjs
  AddType text/css css
  AddType image/svg+xml svg
  AddType application/json json
</IfModule>
`;
fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent, 'utf-8');

const webConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React SPA" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            <add input="{REQUEST_URI}" pattern="^/api/" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <remove fileExtension=".json" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <remove fileExtension=".woff" />
      <mimeMap fileExtension=".woff" mimeType="font/woff" />
      <remove fileExtension=".woff2" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
      <remove fileExtension=".webp" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
    </staticContent>
  </system.webServer>
</configuration>
`;
fs.writeFileSync(path.join(distDir, 'web.config'), webConfigContent, 'utf-8');

// Patch hardcoded /assets/ image paths in JS bundles ONLY if non-root base path is active
const base = process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/prestloans-demo/' : '/');
if (base !== '/' && base !== './' && base !== '') {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  const assetsDir = path.join(distDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
    let totalPatched = 0;
    for (const jsFile of jsFiles) {
      const filePath = path.join(assetsDir, jsFile);
      let code = fs.readFileSync(filePath, 'utf-8');
      code = code.replace(/(["'`])\/assets\//g, (match, quote) => {
        totalPatched++;
        return `${quote}${prefix}/assets/`;
      });
      fs.writeFileSync(filePath, code, 'utf-8');
    }
    console.log(`Successfully patched ${totalPatched} asset paths in JS bundles for base ${base}!`);
  }
}

console.log(`Successfully generated static SPA fallback pages for ${routes.length} routes in dist!`);

