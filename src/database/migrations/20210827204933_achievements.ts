import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("achievements", (t) => {
    t.increments("id").primary().unsigned();
    t.string("title").notNullable();
    t.string("description").notNullable();
    t.enum("type", ["cash", "product", "discount"]).notNullable();
    t.string("reward").notNullable();
    t.integer("rewardValue").notNullable();
    t.integer("cost").notNullable();
    t.integer("restaurantId").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("achievements");
}
