import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("purchases", (t) => {
    t.increments("id").primary().unsigned();
    t.enum("deliveryType", ["delivery", "local", "takeAway"]).notNullable();
    t.string("promotionCode");
    t.double("subTotal");
    t.double("discount");
    t.double("total");
    t.integer("paymentId");
    t.integer("addressId");
    t.integer("userId").notNullable().index();
    t.integer("restaurantId").notNullable().index();
    t.timestamp("createdAt").defaultTo(knex.fn.now());
    t.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("purchases");
}
