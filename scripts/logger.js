/** @format */

const chalk = require("chalk");

export const errorLog = (msg, end) => {
  // eslint-disable-next-line no-console
  console.log(chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg));
  if (end) {
    // eslint-disable-next-line no-console
    console.log();
    process.exit(1);
  }
};

export const log = (msg) => {
  if (msg) {
    // eslint-disable-next-line no-console
    console.log(chalk.blue.bold(`💦 [Water Icon CI]: `), chalk.red(msg));
  } else {
    // eslint-disable-next-line no-console
    console.log();
  }
};
