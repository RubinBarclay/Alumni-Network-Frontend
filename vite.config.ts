import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pro tip: Conditional configs based on environment (dev, prod, etc.)
// https://vitejs.dev/config/#conditional-config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
