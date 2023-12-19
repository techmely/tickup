#!/usr/bin/env zx

import fs from "fs";
import path from "path";
import { isEmpties } from "@techmely/utils";

function generateFilePath(name, domain, persistence) {
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();
  const fileName = `${isoDate}-${name}.ts`;

  return path.join(
    process.cwd(),
    "server",
    domain,
    "infras",
    "persistance",
    persistence,
    "migrations",
    fileName,
  );
}

function createFile(fileName) {
  fs.writeFile(fileName, "", "utf8", (error) => {
    if (error) {
      console.error(`Error creating file: ${error}`);
    } else {
      console.log(`File created: ${fileName}`);
    }
  });
}

function writeFileContent(
  filePath,
  content = `import { Kysely } from "kysely";

export async function up(db: Kysely) {}
export async function down(db: Kysely) {}`,
) {
  fs.appendFileSync(filePath, content, { encoding: "utf-8" });
  console.log("Create migrate file successfully!");
}

console.log("???");
const [_, __, fileName, domain, persistence] = process.argv;
console.log("!!!");
if (isEmpties(fileName, domain, persistence)) {
  console.error("Please provide filename + domain + persistance");
  process.exit(1);
}

const filePath = generateFilePath(fileName, domain, persistence);
console.log("filePath:", filePath);
createFile(filePath);
writeFileContent(filePath);
