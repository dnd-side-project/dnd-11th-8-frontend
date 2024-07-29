import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: process.env.GITHUB_ACTIONS ? ['text-summary'] : ['text'],
    },
  },
});
