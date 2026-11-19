import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const tempDir = path.resolve(os.tmpdir(), `gh-pages-deploy-${Date.now()}`);

console.log('🚀 Preparing GitHub Pages deployment...');

console.log('Building project for GitHub Pages (/prestloans-demo/)...');
execSync('npm run build', {
  stdio: 'inherit',
  cwd: rootDir,
  env: { ...process.env, VITE_BASE_PATH: '/prestloans-demo/' }
});

// Clean temp directory if already exists
try {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
} catch (e) {}

// Get git remote url from current repo
const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf-8', cwd: rootDir }).trim();
console.log(`📡 Remote repository: ${remoteUrl}`);

// Try shallow cloning existing gh-pages branch so git only transfers deltas
let isExistingBranch = false;
try {
  console.log('🔄 Cloning existing gh-pages branch for fast delta deployment...');
  execSync(`git clone --depth 1 --branch gh-pages "${remoteUrl}" "${tempDir}"`, { stdio: 'ignore' });
  isExistingBranch = true;
} catch {
  console.log('Creating fresh gh-pages branch...');
  fs.mkdirSync(tempDir, { recursive: true });
}

// Copy dist into tempDir (preserving .git and ignoring any large archives)
console.log('📦 Syncing build artifacts...');
fs.cpSync(distDir, tempDir, {
  recursive: true,
  filter: (source) => {
    const ext = path.extname(source).toLowerCase();
    if (['.zip', '.rar', '.tar', '.gz', '.7z'].includes(ext)) {
      return false;
    }
    return true;
  }
});

// Git operations in tempDir
try {
  if (!isExistingBranch) {
    execSync('git init', { cwd: tempDir, stdio: 'ignore' });
    execSync('git checkout -b gh-pages', { cwd: tempDir, stdio: 'ignore' });
    execSync(`git remote add origin "${remoteUrl}"`, { cwd: tempDir, stdio: 'ignore' });
  }
  execSync('git config user.name "github-actions[bot]"', { cwd: tempDir, stdio: 'ignore' });
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"', { cwd: tempDir, stdio: 'ignore' });
  execSync('git config http.postBuffer 524288000', { cwd: tempDir, stdio: 'ignore' });
  execSync('git add -A', { cwd: tempDir, stdio: 'ignore' });

  // Check if anything changed
  const status = execSync('git status --porcelain', { cwd: tempDir, encoding: 'utf-8' }).trim();
  if (!status) {
    console.log('✅ gh-pages is already up to date!');
  } else {
    execSync(`git commit -m "Deploy to GitHub Pages: ${new Date().toISOString()}"`, { cwd: tempDir, stdio: 'ignore' });
    console.log('🚀 Pushing delta to gh-pages branch...');
    execSync('git push origin gh-pages --force', { cwd: tempDir, stdio: 'inherit' });
    console.log('✅ Successfully deployed to gh-pages branch!');
  }
} catch (err) {
  console.error('❌ Failed to push to gh-pages branch:', err.message);
  process.exit(1);
} finally {
  try {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
    }
  } catch (e) {}
  // Always restore standard clean production build for regular web servers (root '/') in dist/
  try {
    console.log('🔄 Rebuilding standard production assets for regular web servers in dist/...');
    execSync('npm run build', {
      stdio: 'ignore',
      cwd: rootDir,
      env: { ...process.env, VITE_BASE_PATH: '' }
    });
    console.log('✅ Local dist/ restored with clean standard production build (root /).');
  } catch (rebuildErr) {
    console.warn('⚠️ Could not automatically restore dist/ root build:', rebuildErr.message);
  }
}

