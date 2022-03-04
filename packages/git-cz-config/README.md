# @fe6/norm-git-cz-config

Git 提交信息的管理

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
