import { Knex } from "knex";
import onUpdateTrigger from "../../helpers/onUpdateTrigger";

const tableName = "workHours";
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, (t) => {
      t.increments("id").primary().unsigned();
      t.jsonb("sunday").notNullable();
      t.jsonb("monday").notNullable();
      t.jsonb("tuesday").notNullable();
      t.jsonb("wednesday").notNullable();
      t.jsonb("thursday").notNullable();
      t.jsonb("friday").notNullable();
      t.jsonb("saturday").notNullable();
      t.timestamp("createdAt").defaultTo(knex.fn.now());
      t.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
