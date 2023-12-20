import { Kysely } from "kysely";
import type { UserModel } from "../../../../domain/repo/user.model";

type DatabaseTables = {
  user: UserModel;
};

export async function up(db: Kysely<DatabaseTables>) {}
export async function down(db: Kysely<DatabaseTables>) {}
