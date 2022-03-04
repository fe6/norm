const norm = require("./customizable");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", norm.types.map(({ value }) => value)],
  },
};
