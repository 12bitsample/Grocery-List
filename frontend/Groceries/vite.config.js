import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(
  {
  plugins: [react()],
})

// export default {
//   server: {
//     proxy: {
//       '/api': 'http://localhost:4000'
//     }
//   },
//   plugins: [react()]
// };