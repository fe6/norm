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
  rules: {
    'prettier/prettier': 1,
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
