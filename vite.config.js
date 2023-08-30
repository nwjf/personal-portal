import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx({ include: /(\.[jt]sx?$)/ }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 1000,
    open: false,
    proxy: {},
  },
  build: {
    outDir: './dist'
  },
})
