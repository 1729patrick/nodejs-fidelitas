import { Knex } from "knex";
import onUpdateTrigger from "../../helpers/onUpdateTrigger";

const tableName = "products";
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, (t) => {
      t.increments("id").primary().unsigned();
      t.string("title").notNullable();
      t.string("description").notNullable();
      t.string("ingredients");
      t.string("allergens");
      t.double("price");
      t.enum("type", [
        "starter",
        "side",
        "main",
        "dessert",
        "drink",
        "special",
        "salad",
      ]);
      t.integer("imageId").notNullable();
      t.integer("restaurantId").notNullable().index();
      t.timestamp("createdAt").defaultTo(knex.fn.now());
      t.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
