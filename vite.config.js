// community-vue/vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/community-vue/', // '/REPO_NAME/'로 설정
  plugins: [vue()],
});
