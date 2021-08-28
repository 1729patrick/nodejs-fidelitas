import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("reservations", (t) => {
    t.increments("id").primary().unsigned();
    t.date("date").notNullable();
    t.time("time").notNullable();
    t.integer("adults").defaultTo(0);
    t.integer("kids").defaultTo(0);
    t.integer("babies").defaultTo(0);
    t.string("clientNotes");
    t.string("adminNotes");
    t.integer("userId").notNullable().index();
    t.integer("restaurantId").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("reservations");
}
