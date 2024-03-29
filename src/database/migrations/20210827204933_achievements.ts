import { Knex } from 'knex';
import onUpdateTrigger from '../../helpers/onUpdateTrigger';

const tableName = 'achievements';
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(tableName, t => {
      t.increments('id').primary().unsigned();
      t.string('title').notNullable();
      t.string('description').notNullable();
      t.enum('type', [
        'shareApp',
        'visitRestaurant',
        'purchasePrice',
        'purchaseEvaluation',
      ]).notNullable();
      t.enum('rewardType', ['cash', 'product', 'discount']).notNullable();
      t.string('rewardTitle').notNullable();
      t.integer('rewardValue').notNullable();
      t.integer('purchasePrice');
      t.integer('productId');
      t.integer('cost').notNullable();
      t.enum('status', ['ACTIVE', 'DELETED']).defaultTo('ACTIVE').notNullable();
      t.integer('restaurantId').notNullable().index();
      t.timestamp('createdAt').defaultTo(knex.fn.now());
      t.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger(tableName)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
