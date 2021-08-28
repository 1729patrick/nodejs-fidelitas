import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("purchases", (t) => {
    t.foreign("userId").references("users.id");
    t.foreign("paymentId").references("payments.id");
    t.foreign("addressId").references("addresses.id");
    t.foreign("restaurantId").references("restaurants.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("purchases", (t) => {
    t.dropForeign("userId");
    t.dropForeign("paymentId");
    t.dropForeign("addressId");
    t.dropForeign("restaurantId");
  });
}
