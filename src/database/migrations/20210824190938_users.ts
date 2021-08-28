import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (t) => {
    t.increments("id").primary().unsigned();
    t.string("firstName").notNullable();
    t.string("lastName").notNullable();
    t.string("password").notNullable();
    t.enum("type", ["client", "admin"]).notNullable();
    t.string("phone").unique().index().notNullable();
    t.string("email").unique().index().notNullable();
    t.integer("restaurantId").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
