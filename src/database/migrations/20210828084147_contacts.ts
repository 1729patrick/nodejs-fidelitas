import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("contacts", (t) => {
    t.foreign("restaurantId").references("restaurants.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("contacts", (t) => {
    t.dropForeign("restaurantId");
  });
}
