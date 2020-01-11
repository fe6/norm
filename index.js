
const prettier = require('./src/prettier');
const stylelint = require('./src/stylelint');
const jslint = require('./src/js');
const jestlint = require('./src/jest');
const vue2Jslint = require('./src/vue2-js');
const vue2Tslint = require('./src/vue2-ts');

module.exports = {
  prettier,
  stylelint,
  jslint,
  jestlint,
  vue2Jslint,
  vue2Tslint,
};
