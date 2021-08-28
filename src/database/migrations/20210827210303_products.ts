import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("products", (t) => {
    t.increments("id").primary().unsigned();
    t.string("title").notNullable();
    t.string("description").notNullable();
    t.string("ingredients");
    t.string("allergens");
    t.double("price");
    t.enum("type", [
      "starter",
      "side",
      "main",
      "dessert",
      "drink",
      "special",
      "salad",
    ]);
    t.integer("restaurantId").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("products");
}
