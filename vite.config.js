import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Başına nokta ekleyerek tüm yolları "bulunduğun yere göre ara" diyoruz
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
