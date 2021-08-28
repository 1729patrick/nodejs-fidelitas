import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("addresses", (t) => {
    t.increments("id").primary().unsigned();
    t.double("lat");
    t.double("long");
    t.string("address1").notNullable();
    t.string("address2");
    t.string("postalCode").notNullable();
    t.string("city").notNullable();
    t.string("responsible").notNullable();
    t.string("phone").notNullable();
    t.string("notes");
    t.boolean("primary").defaultTo(false).notNullable();
    t.integer("userId").notNullable().index();
    t.integer("restaurantId").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("addresses");
}
