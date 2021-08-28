"use strict";

import knex from "knex";
import knexfile from "../../knexfile";
import { Restaurant } from "../types/models/restaurant";
import { User } from "../types/models/user";

const env = process.env.NODE_ENV || "development";

const database = knex(
  knexfile[env as "development" | "production" | "staging"]
);

export const Users = () => database<User>("users");
export const Restaurants = () => database<Restaurant>("restaurants");

export default database;
