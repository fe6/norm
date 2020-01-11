module.exports = {
  root: true,
  extends: [
    './vue2-js',
    '@vue/typescript',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
