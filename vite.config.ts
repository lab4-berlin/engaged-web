import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/engaged-web/', // Updated to match new repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});