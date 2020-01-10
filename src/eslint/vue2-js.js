module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/vue',
    '@vue/airbnb',
    'plugin:vue/essential',
  ].concat([
    './jest',
  ].map(require.resolve)),
  plugins: ['vue', 'jsx-control-statements', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
};
