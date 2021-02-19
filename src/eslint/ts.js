const practices = require('./rules/best-practices').rules;
const errors = require('./rules/errors').rules;
const node = require('./rules/node').rules;
const style = require('./rules/style').rules;
const variables = require('./rules/variables').rules;
const es6 = require('./rules/es6').rules;
const strict = require('./rules/strict').rules;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...practices,
    ...errors,
    ...node,
    ...style,
    ...variables,
    ...es6,
    ...strict,
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    // note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"]
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
};
