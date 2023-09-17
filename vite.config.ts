import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@common': path.resolve(__dirname, '/src/common'),
      '@common:constants': path.resolve(__dirname, '/src/common/constants'),
      '@common:models': path.resolve(__dirname, '/src/common/models'),
      '@common:patterns': path.resolve(__dirname, '/src/common/patterns'),
      '@common:router': path.resolve(__dirname, '/src/common/router'),
      '@common:types': path.resolve(__dirname, '/src/common/types'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@context': path.resolve(__dirname, '/src/context'),
      '@hooks': path.resolve(__dirname, '/src/hooks'),
      '@layouts': path.resolve(__dirname, '/src/layouts'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@services': path.resolve(__dirname, '/src/services'),
    },
  },
})