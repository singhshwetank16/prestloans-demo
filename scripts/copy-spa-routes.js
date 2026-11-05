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

console.log(`Successfully generated static SPA fallback pages for ${routes.length} routes in dist!`);

