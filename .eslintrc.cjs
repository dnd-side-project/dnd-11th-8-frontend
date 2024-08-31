module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/stories/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    // 파일 상단에 react 를 import 해야 하는 룰을 비활성화 합니다.
    'react/react-in-jsx-scope': 0,
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
