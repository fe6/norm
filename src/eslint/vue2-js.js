module.exports = {
  root: true,
  extends: [
    './jest',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  plugins: [
    'vue',
    'jsx-control-statements',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 1,
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: [],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
