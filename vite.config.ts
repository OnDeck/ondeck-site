import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // privacy/index.html is served at /privacy, the URL the Chrome Web Store listing points to.
      input: { main: 'index.html', privacy: 'privacy/index.html' },
    },
  },
});
