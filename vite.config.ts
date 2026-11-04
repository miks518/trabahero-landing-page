import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the same build works at both the project URL
  // (miks518.github.io/trabahero-landing-page/) and a custom domain root.
  base: './',
})
