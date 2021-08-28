import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("restaurants", (t) => {
    t.increments("id").primary().unsigned();
    t.string("title").notNullable();
    t.string("description").notNullable();
    t.integer("addressId").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("restaurants");
}
