import { Knex } from "knex";
import onUpdateTrigger from "../../helpers/onUpdateTrigger";

const tableName = "workHours";
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, (t) => {
      t.increments("id").primary().unsigned();
      t.string("sunday").notNullable();
      t.string("monday").notNullable();
      t.string("tuesday").notNullable();
      t.string("wednesday").notNullable();
      t.string("thursday").notNullable();
      t.string("friday").notNullable();
      t.string("saturday").notNullable();
      t.integer("restaurantId").notNullable().index();
      t.timestamp("createdAt").defaultTo(knex.fn.now());
      t.timestamp("updatedAt").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
