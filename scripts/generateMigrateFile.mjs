import fs from "fs";
import path from "path";
import { isEmpties } from "@techmely/utils";

function generateFilePath(name, domain, persistence) {
  const currentDate = new Date();
  const isoDate = currentDate.toISOString();
  const fileName = `${isoDate}-${name}.ts`;

  return path.join(
    process.cwd(),
    "modules",
    domain,
    "infras",
    "persistence",
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
  domain,
  content = `import { Kysely } from "kysely";
type DatabaseTables = {
  
};

export async function up(db: Kysely<DatabaseTables>) {}
export async function down(db: Kysely<DatabaseTables>) {}`,
) {
  fs.appendFileSync(filePath, content, { encoding: "utf-8" });
  console.log(`Append up/down migrate file domain ${domain} successfully!`);
}

const [_, __, fileName, domain, persistence] = process.argv;
if (isEmpties(fileName, domain, persistence)) {
  console.error("Please provide filename + domain + persistance");
  process.exit(1);
}

const filePath = generateFilePath(fileName, domain, persistence);
createFile(filePath);
writeFileContent(filePath, domain);
