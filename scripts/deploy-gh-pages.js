import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const tempDir = path.resolve(rootDir, 'node_modules/.cache/gh-pages-deploy');

console.log('🚀 Preparing GitHub Pages deployment...');

if (!fs.existsSync(distDir)) {
  console.log('Building project first...');
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
}

// Clean temp directory
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

// Copy dist into tempDir
console.log('📦 Copying build artifacts...');
fs.cpSync(distDir, tempDir, { recursive: true });

// Get git remote url from current repo
const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf-8', cwd: rootDir }).trim();
console.log(`📡 Remote repository: ${remoteUrl}`);

// Git operations in tempDir
try {
  execSync('git init', { cwd: tempDir, stdio: 'ignore' });
  execSync('git config user.name "github-actions[bot]"', { cwd: tempDir, stdio: 'ignore' });
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"', { cwd: tempDir, stdio: 'ignore' });
  execSync('git checkout -b gh-pages', { cwd: tempDir, stdio: 'ignore' });
  execSync('git add -A', { cwd: tempDir, stdio: 'ignore' });
  execSync(`git commit -m "Deploy to GitHub Pages: ${new Date().toISOString()}"`, { cwd: tempDir, stdio: 'ignore' });
  execSync(`git remote add origin "${remoteUrl}"`, { cwd: tempDir, stdio: 'ignore' });

  console.log('🚀 Pushing to gh-pages branch...');
  execSync('git push origin gh-pages --force', { cwd: tempDir, stdio: 'inherit' });

  console.log('✅ Successfully deployed to gh-pages branch!');
} catch (err) {
  console.error('❌ Failed to push to gh-pages branch:', err.message);
  process.exit(1);
} finally {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
