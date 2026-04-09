import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Garante caminhos relativos para ativos, essencial se o repositório for subdomínio
  base: './', 
})
