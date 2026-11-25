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

// Copy 404.html for GitHub Pages fallback
fs.writeFileSync(path.join(distDir, '404.html'), indexContent, 'utf-8');

// Create .nojekyll so GitHub Pages does not ignore assets or run Jekyll
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf-8');

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

// Copy hardened web.config directly from public/web.config (CERT-In Security Compliance)
const publicWebConfig = path.resolve(__dirname, '../public/web.config');
if (fs.existsSync(publicWebConfig)) {
  fs.copyFileSync(publicWebConfig, path.join(distDir, 'web.config'));
}

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

console.log('Successfully prepared React SPA production bundle in dist!');

