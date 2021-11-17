/** @format */

// fork from https://github.com/vitejs/vite
const chalk = require('chalk');

if (!/pnpm/.test(process.env.npm_execpath || '')) {
  // eslint-disable-next-line no-console
  console.log();
  // eslint-disable-next-line no-console
  console.log(
    chalk.red(
      `[water icon error]:此存储库需要使用 ${chalk.cyan.bold(
        'pnpm',
      )} 作为包管理器，脚本才能正常工作。`,
    ),
  );
  // eslint-disable-next-line no-console
  console.log();
  process.exit(1);
}
