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
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  },
  rules: {
    'prettier/prettier': 1,
    'no-param-reassign': ['error', { props: false }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
