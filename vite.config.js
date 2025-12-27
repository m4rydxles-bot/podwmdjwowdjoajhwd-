import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Assets yollarının başına nokta koyar, daha güvenlidir
})
