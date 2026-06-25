import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/delhivery-one-home/',
  build: { outDir: 'docs' },
})
