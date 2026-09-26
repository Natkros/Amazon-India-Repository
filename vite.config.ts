import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    allowedHosts: true,
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: false,
    allowedHosts: true,
  }
})


