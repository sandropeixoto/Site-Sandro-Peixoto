import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define o base como '/' para seu domínio customizado sandropeixoto.com.br
  base: '/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
