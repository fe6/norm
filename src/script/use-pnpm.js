/** @format */

// fork from https://github.com/vitejs/vite

if (!/pnpm/.test(process.env.npm_execpath || '')) {
  // eslint-disable-next-line no-console
  console.log();
  // eslint-disable-next-line no-console
  console.log(
    `\x1B[31m[error]: 此存储库需要使用 pnpm 作为包管理器，脚本才能正常工作。\x1B[39m`,
  );
  // eslint-disable-next-line no-console
  console.log();
  // eslint-disable-next-line no-console
  console.log(
    `\x1B[34m[info]: 速度移步 https://pnpm.io/zh 去安装了解吧~\x1B[39m`
  );
  // eslint-disable-next-line no-console
  console.log();
  process.exit(1);
}
