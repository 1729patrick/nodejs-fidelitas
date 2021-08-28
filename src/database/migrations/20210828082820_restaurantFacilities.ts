import { Knex } from "knex";
import onUpdateTrigger from "../../helpers/onUpdateTrigger";

const tableName = "restaurantFacilities";
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, (t) => {
      t.increments("id").primary().unsigned();
      t.integer("restaurantId")
        .references("restaurants.id")
        .notNullable()
        .index();
      t.integer("facilityId").references("facilities.id").notNullable().index();
      t.timestamp("createdAt").defaultTo(knex.fn.now());
      t.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
