import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("restaurants", (t) => {
    t.foreign("addressId").references("addresses.id");
    t.foreign("workHoursId").references("workHours.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("restaurants", (t) => {
    t.dropForeign("addressId");
    t.dropForeign("workHoursId");
  });
}
