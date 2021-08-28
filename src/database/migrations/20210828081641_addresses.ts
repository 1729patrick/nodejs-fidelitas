import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("addresses", (t) => {
    t.foreign("userId").references("users.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("addresses", (t) => {
    t.dropForeign("userId");
  });
}
