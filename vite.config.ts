import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      // Multi-page build: each entry ships its own static <head> so crawlers get
      // real titles, descriptions, canonicals and JSON-LD without running JS.
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        faq: resolve(__dirname, 'faq.html'),
      },
    },
  },
});
