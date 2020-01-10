module.exports = {
  extends: [
    './jest',
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/vue',
  ].map(require.resolve),
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
