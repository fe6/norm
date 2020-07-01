// css 规范
// 规范官网 https://stylelint.io/user-guide/rules/
module.exports = {
  extends: ['./stylelint-only.js', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': [true, require.resolve('./prettier')],
  },
};
