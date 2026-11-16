import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ensures all hardcoded '/assets/...' references in JSX/TS are prefixed with the base path in production
function prefixAssetsPlugin() {
  return {
    name: 'prefix-assets-plugin',
    generateBundle(_: any, bundle: any) {
      for (const fileName in bundle) {
        const chunk = bundle[fileName];
        if (chunk.type === 'chunk' && typeof chunk.code === 'string') {
          chunk.code = chunk.code.replace(/(["'`])\/assets\//g, '$1/prestloans-demo/assets/');
        }
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/prestloans-demo/',
  plugins: [react(), ...(command === 'build' ? [prefixAssetsPlugin()] : [])],
  server: {
    port: 3000,
    open: false,
    host: true
  },
  preview: {
    port: 3000
  }
}));

