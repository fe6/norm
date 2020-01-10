module.exports = {
  extends: [
    './src/eslint/jest',
  ].map(require.resolve),
  rules: {},
};
