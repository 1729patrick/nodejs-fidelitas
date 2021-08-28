import { Knex } from "knex";
import onUpdateTrigger from "../../helpers/onUpdateTrigger";

const tableName = "addresses";
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, (t) => {
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
      t.integer("userId");
      t.integer("restaurantId");
      t.timestamp("createdAt").defaultTo(knex.fn.now());
      t.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
