import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define o base como vazio para garantir que caminhos de build sejam relativos (./)
  base: '', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
