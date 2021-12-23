module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'eslint-config-prettier'],
  parser: '@babel/eslint-parser',
  plugins: ['prettier', '@babel'],
  rules: {
    'prettier/prettier': 'error',
  },
};
