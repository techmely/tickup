import { CreateTableBuilder, sql } from "kysely";

export function psEnumSql(...args: string[]) {
  return sql`enum(${sql.join(args.map(sql.lit))})`;
}

export function psConcatSql(...args: string[]) {
  return sql`concat(${args.join(', "", ')})`;
}

export function psMySqlUuid() {
  return sql`(UUID())`;
}

export function psWithTimestamps<Table extends string, Fields extends string>(
  qb: CreateTableBuilder<Table, Fields>,
) {
  return qb
    .addColumn("created_at", "timestamp", (col) => col.defaultTo(sql`CURRENT_TIMESTAMP`))
    .addColumn("updated_at", "timestamp", (col) => col.defaultTo(sql`CURRENT_TIMESTAMP`));
}

export function psWithUser<Table extends string, Fields extends string>(
  qb: CreateTableBuilder<Table, Fields>,
) {
  return qb
    .addColumn("created_by", "varchar(255)", (col) => col.references("user.id"))
    .addColumn("updated_by", "varchar(255)", (col) => col.references("user.id"));
}

export function psWithMySqlV8<Table extends string, Fields extends string>(
  qb: CreateTableBuilder<Table, Fields>,
) {
  return qb.modifyEnd(sql`COLLATE utf8mb4_0900_ai_ci`);
}
