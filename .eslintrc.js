module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'eslint-config-prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // must be last
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
