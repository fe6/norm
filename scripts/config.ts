/** @format */

import semver from "semver";

export const PACKAGE_TYPE: string[] = ["git-cz-config", "prettier"];

export const VERSION_INCREMENTS: semver.ReleaseType[] = [
  "patch",
  "minor",
  "major",
  "prepatch",
  "preminor",
  "premajor",
  "prerelease",
];
