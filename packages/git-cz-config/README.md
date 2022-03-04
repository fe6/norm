# @fe6/norm-git-cz-config

Git 提交信息的管理

### 配置之前

安装相关依赖，运行 `pnpm add -D @commitlint/cli @commitlint/config-conventional`

### 如何配置

- 自定义 git-cz 的选项

```json
// 根目录的 package.json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-customizable"
  },
  "cz-customizable": {
    "config": "./node_modules/@fe6/norm-git-cz-config/customizable.js"
  }
}
```

- Git commit 验证

```json
// 根目录的 commitlint.config.js
module.exports = {
  extends: ["@fe6/norm-git-cz-config"],
};
```

### 在 husky 中使用

- 在 `/.husky/commit-msg` 中添加

```shell

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

- 在 `/commitlint.config.js` 中添加

```javascript
module.exports = {
  extends: ["@fe6/norm-git-cz-config"],
};
```
