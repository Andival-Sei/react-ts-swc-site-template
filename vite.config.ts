import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
    port: 3000,          // Фиксированный порт для разработки
    open: true,          // Автоматически открывать браузер
  },
  build: {
    outDir: 'dist',      // Папка для сборки
    sourcemap: true,     // Генерация source maps
  },
  resolve: {
    alias: {            // Алиасы для импортов
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles'
    }
  }
})
