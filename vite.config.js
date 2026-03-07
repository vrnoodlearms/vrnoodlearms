import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages project sites: base = '/repo-name/' (set via VITE_BASE_PATH in CI)
  base: process.env.VITE_BASE_PATH || '/',
})
