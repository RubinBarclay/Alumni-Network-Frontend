import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Pro tip: Conditional configs based on environment (dev, prod, etc.)
// https://vitejs.dev/config/#conditional-config

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    define: {
      __APP_ENV_: env.APP_ENV
    }
  }
})

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000
//   }
// })
