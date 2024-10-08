import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: process.env.GITHUB_ACTIONS ? ['text-summary'] : ['text'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
