import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("restaurantFacilities", (t) => {
    t.increments("id").primary().unsigned();
    t.integer("restaurantId")
      .references("restaurants.id")
      .notNullable()
      .index();
    t.integer("facilityId").references("facilities.id").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("restaurantFacilities");
}
