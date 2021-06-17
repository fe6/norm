
const prettier = require('./src/prettier');
const stylelint = require('./src/stylelint');
const jslint = require('./src/eslint/js');
const tslint = require('./src/eslint/ts');
const jestlint = require('./src/eslint/jest');
const vue2Jslint = require('./src/eslint/vue2-js');
const vue2Tslint = require('./src/eslint/vue2-ts');
const vue3Tslint = require('./src/eslint/vue3-ts');

module.exports = {
  prettier,
  stylelint,
  jslint,
  tslint,
  jestlint,
  vue2Jslint,
  vue2Tslint,
  vue3Tslint,
};
