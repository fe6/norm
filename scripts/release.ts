/**
 * modified from https://github.com/vuejs/vue-next/blob/master/scripts/release.js
 *
 * @format
 */

import fs from "fs";
import prompts from "prompts";
import { execa } from "execa";
import semver from "semver";
import { resolve } from "path";

import { errorLog, log } from "./logger";

import { VERSION_INCREMENTS, PACKAGE_TYPE } from "./config";

const args = require("minimist")(process.argv.slice(2));

const testVersion = (tVersion: string) => {
  if (!semver.valid(tVersion)) {
    errorLog(`无效的目标版本 -> ${tVersion}`, true);
  }
};

const isDryRun = args.dry;
const skipBuild: boolean = args.skipBuild;

const run = (bin: string, args: string[], opts: object = {}) =>
  execa(bin, args, { stdio: "inherit", ...opts });

const dryRun = (bin: string, args: string[]) => log(`[dryrun] ${bin} ${args.join(" ")}`);

const runIfNotDry = isDryRun ? dryRun : run;

function updateVersion(pkgFile: string, version: string) {
  const pkg = JSON.parse(fs.readFileSync(pkgFile, "utf-8"));
  pkg.version = version;
  fs.writeFileSync(pkgFile, `${JSON.stringify(pkg, null, 2)}\n`);
}

async function publishPackage(pkgName: string, version: string) {
  const publicArgs = [
    "publish",
    "--new-version",
    version,
    "--no-git-tag-version",
    "--access",
    "public",
  ];
  try {
    await run("yarn", publicArgs, {
      stdio: "pipe",
    });
    log("");
    log(`发布成功 ${pkgName}@${version}`);
    log("");
  } catch (e: any) {
    if (e.stderr.match(/previously published/)) {
      log("");
      log(`跳过已发布的: ${pkgName}`);
      log("");
    } else {
      throw e;
    }
  }
}

export async function goRelease(version: string) {
  let targetVersion = version;
  const pkgDir = process.cwd();
  const pkgPath = resolve(pkgDir, "package.json");
  const pkg = require(pkgPath);
  const pkgName = pkg.name.replace(/^@fe6\//, "");

  if (!targetVersion) {
    const currentVersion = pkg.version;
    const inc = (i: semver.ReleaseType) => semver.inc(currentVersion, i, "beta");
    const { release } = await prompts({
      type: "select",
      name: "release",
      message: "选择发布版本",
      choices: VERSION_INCREMENTS.map((i: semver.ReleaseType) => `${i}: (${inc(i)})`)
        .concat(["custom"])
        .map((i) => ({ value: i, title: i })),
    });

    if (release === "custom") {
      /**
       * @type {{ version: string }}
       */
      const res = await prompts({
        type: "text",
        name: "version",
        message: "输入发布版本",
        initial: currentVersion,
      });
      targetVersion = res.version;
    } else {
      targetVersion = release.match(/\((.*)\)/)[1];
    }
  }

  testVersion(targetVersion);

  const tag = `${pkgName}@${targetVersion}`;

  const { yes } = await prompts({
    type: "confirm",
    name: "yes",
    message: `TAG 是 ${tag} 吗?`,
  });

  if (!yes) {
    return;
  }

  log("");
  log("更新包的版本...");
  log("");

  updateVersion(pkgPath, targetVersion);

  log("");
  log(`打包 ${pkgName} ...`);
  log("");

  if (!skipBuild && !isDryRun) {
    const confirmRunBeforeRelease = await prompts({
      type: "confirm",
      name: "yes",
      message: `运行 pnpm release:before 命令了吗?`,
    });

    if (!confirmRunBeforeRelease.yes) {
      return;
    }
  } else {
    log(`(skipped)`);
  }

  const confirmChangelog = await prompts({
    type: "confirm",
    name: "yes",
    message: `确定生成 CHANGELONG 吗?`,
  });

  if (!confirmChangelog.yes) {
    return;
  }

  log("");
  log("生成 CHANGELONG...");
  log("");

  await run("pnpm", ["run", "changelog"]);

  const confirmGitPush = await prompts({
    type: "confirm",
    name: "yes",
    message: `确定将改变提交到 GitHub 吗?`,
  });

  if (!confirmGitPush.yes) {
    return;
  }

  const { stdout } = await run("git", ["diff"], { stdio: "pipe" });
  if (stdout) {
    log("");
    log("提交 GIT ...");
    log("");

    await runIfNotDry("git", ["add", "-A"]);
    await runIfNotDry("git", ["commit", "-m", `release($bump): ${tag}`]);
  } else {
    log("这个仓库没有改变");
  }

  const confirmRelease = await prompts({
    type: "confirm",
    name: "yes",
    message: `确定发布 ${pkgName} 的 ${targetVersion} 版本吗?`,
  });

  if (!confirmRelease.yes) {
    return;
  }

  log("");
  log(`${pkg.name} 发布中...`);
  log("");

  await publishPackage(pkgName, targetVersion);

  log("");
  log("提交到 GitHub...");
  log("");

  await runIfNotDry("git", ["tag", tag]);
  await runIfNotDry("git", ["push", "origin", "master", tag]);

  if (isDryRun) {
    log(`\nDry run finished - run git diff to see package changes.`);
  }
}

(async () => {
  const argLength = args._.length;
  if (argLength) {
    const targetVersion = args._[1];
    const targetPackageName = args._[0];
    if (targetVersion) {
      testVersion(targetVersion);
    }
    if (PACKAGE_TYPE.includes(targetPackageName)) {
      await goRelease(targetVersion);
    }
  } else {
    errorLog("请加上发布的包名~", true);
  }
})();
