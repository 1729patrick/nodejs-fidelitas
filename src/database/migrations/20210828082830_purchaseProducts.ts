import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("purchaseProducts", (t) => {
    t.increments("id").primary().unsigned();
    t.integer("purchaseId").references("purchases.id").notNullable().index();
    t.integer("productId").references("products.id").notNullable();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("purchaseProducts");
}
