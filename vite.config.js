import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Altere para o nome do seu repositório se não for o domínio principal
  base: '/', 
})
