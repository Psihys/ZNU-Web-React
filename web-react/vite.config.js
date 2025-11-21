import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/',

  build: {
    outDir: 'dist',
  },

  server: {
    proxy: {
      '/echo': {
        target: 'https://postman-echo.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/echo/, ''),
      },
    },
  },
})
