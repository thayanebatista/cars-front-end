import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import vueTypeImports from 'vite-plugin-vue-type-imports';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 8080,
  },
  plugins: [vue(), vueTypeImports(), eslintPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
      '.scss',
    ],
  },
});
