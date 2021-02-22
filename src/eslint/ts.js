module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: [
    ...[
      './rules/best-practices',
      './rules/errors',
      './rules/node',
      './rules/style',
      './rules/variables',
      './rules/es6',
      './rules/imports',
      './rules/strict',
    ].map(require.resolve),
    'plugin:prettier/recommended',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint',
    'prettier'],
  rules: {
    'prettier/prettier': 1,
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' },
    ],
    // note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
};
