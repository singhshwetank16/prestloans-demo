import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ensures all hardcoded '/assets/...' references in JSX/TS match the base path in production if not root '/'
function prefixAssetsPlugin(base: string) {
  return {
    name: 'prefix-assets-plugin',
    generateBundle(_: any, bundle: any) {
      if (base === '/' || base === './' || base === '') return;
      const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
      for (const fileName in bundle) {
        const chunk = bundle[fileName];
        if (chunk.type === 'chunk' && typeof chunk.code === 'string') {
          chunk.code = chunk.code.replace(/(["'`])\/assets\//g, `$1${prefix}/assets/`);
        }
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // If VITE_BASE_PATH is explicitly set or running in GitHub Actions, use it;
  // otherwise default to root '/' for standard production server deployments (e.g. Apache, Nginx, cPanel, IIS).
  const base = process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/prestloans-demo/' : '/');
  const isProd = command === 'build';

  return {
    base,
    plugins: [react(), ...(isProd ? [prefixAssetsPlugin(base)] : [])],
    server: {
      port: 3000,
      open: false,
      host: true
    },
    preview: {
      port: 3000
    }
  };
});

