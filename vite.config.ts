import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://batugane.github.io/maven-to-gradle',
  plugins: [react()],
})
