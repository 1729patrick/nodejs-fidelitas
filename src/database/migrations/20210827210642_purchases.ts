import { Knex } from "knex";
import onUpdateTrigger from "../../helpers/onUpdateTrigger";

const tableName = "purchases";
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, (t) => {
      t.increments("id").primary().unsigned();
      t.enum("deliveryType", ["delivery", "local", "takeAway"]).notNullable();
      t.string("promotionCode");
      t.double("subTotal").notNullable();
      t.double("discount").defaultTo(0);
      t.double("total").notNullable();
      t.integer("paymentId").notNullable();
      t.integer("addressId").notNullable();
      t.integer("userId").notNullable().index();
      t.integer("restaurantId").notNullable().index();
      t.timestamp("createdAt").defaultTo(knex.fn.now());
      t.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
