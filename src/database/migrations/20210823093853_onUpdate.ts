import { Knex } from "knex";

const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION onUpdateTimestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW.updatedAt = now();
    RETURN NEW;
  END;
$$ language 'plpgsql';
`;

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = `DROP FUNCTION onUpdateTimestamp`;

exports.up = (knex: Knex): Promise<void> =>
  knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION);

exports.down = (knex: Knex): Promise<void> =>
  knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION);
