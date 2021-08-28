"use strict";

import knex from "knex";
import knexfile from "../../knexfile";
import { User } from "../types/models/user";

const env = process.env.NODE_ENV || "development";

const database = knex(
  knexfile[env as "development" | "production" | "staging"]
);

export const Users = () => database<User>("users");

export default database;
