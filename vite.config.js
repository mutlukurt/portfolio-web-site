import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: false,
    hmr: {
      port: 3001
    }
  },
  preview: {
    port: 3000,
    host: true
  },
  define: {
    global: 'globalThis',
  }
})