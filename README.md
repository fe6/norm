# norm
一个包含 prettier，eslint，stylelint 的配置文件合集，统一美化标准。

## 使用

在 **JavaScript** 的 **Vue 2.x** 项目中的 `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@fe6/norm/src/eslint/vue2-js')],
  rules: {
    // your rules
  },
};
```

在 **TypeScript** 的 **Vue 2.x** 项目中的 `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@fe6/norm/src/eslint/vue2-ts')],
  rules: {
    // your rules
  },
};
```

在普通的 **JavaScript** 项目中的 `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@fe6/norm/src/eslint/js')],
  rules: {
    // your rules
  },
};
```

在有 **jest** 普通的 **JavaScript** 项目中的 `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@fe6/norm/src/eslint/jest')],
  rules: {
    // your rules
  },
};
```

在 `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('@fe6/norm/src/stylelint')],
  rules: {
    // your rules
  },
};
```

在 `.prettierrc.js`

```js
const prettier = require('@fe6/norm/src/prettier');

module.exports = {
  ...prettier,
};
```