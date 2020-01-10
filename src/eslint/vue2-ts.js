module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/typescript',
    '@vue/airbnb',
    'plugin:prettier/recommended',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ].concat([
    './jest',
  ].map(require.resolve)),
  plugins: [
    '@typescript-eslint',
    'vue',
    'jsx-control-statements',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
};
