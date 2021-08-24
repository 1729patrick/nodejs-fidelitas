"use strict";

import knex from "knex";
import knexfile from "../../knexfile";

const env = process.env.NODE_ENV || "development";

const database = knex(
  knexfile[env as "development" | "production" | "staging"]
);

export default database;
