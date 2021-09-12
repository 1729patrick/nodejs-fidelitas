import { Knex } from 'knex';
import onUpdateTrigger from '../../helpers/onUpdateTrigger';

const tableName = 'userReservations';
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, t => {
      t.increments('id').primary().unsigned();
      t.date('date').notNullable();
      t.time('time').notNullable();
      t.integer('adults').defaultTo(0);
      t.integer('kids').defaultTo(0);
      t.integer('babies').defaultTo(0);
      t.string('clientNotes');
      t.string('adminNotes');
      t.enum('type', ['breakfast', 'lunch', 'dinner']);
      t.enum('status', ['canceled', 'inReview', 'confirmed'])
        .defaultTo('inReview')
        .notNullable();
      t.integer('userId').notNullable().index();
      t.integer('restaurantId').notNullable().index();
      t.timestamp('createdAt').defaultTo(knex.fn.now());
      t.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
