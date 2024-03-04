import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  root: process.cwd(),
  build: {
    outDir: '../dist'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src' 
    }
  }
});
