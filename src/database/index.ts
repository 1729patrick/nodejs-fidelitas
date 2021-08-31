"use strict";

import knex from "knex";
import knexfile from "../../knexfile";
import { Achievement } from "../../types/models/achievement";
import { Address } from "../../types/models/address";
import { File } from "../../types/models/file";
import { Notification } from "../../types/models/notification";
import { Product } from "../../types/models/product";
import { Restaurant } from "../../types/models/restaurant";
import { User } from "../../types/models/user";
import { UserNotification } from "../../types/models/userNotification";
import { UserReservation } from "../../types/models/userReservations";

const env = process.env.NODE_ENV || "development";

const database = knex(
  knexfile[env as "development" | "production" | "staging"]
);

export const Users = () => database<User>("users");
export const Restaurants = () => database<Restaurant>("restaurants");
export const Products = () => database<Product>("products");
export const Files = () => database<File>("files");
export const Achievements = () => database<Achievement>("achievements");
export const Addresses = () => database<Address>("addresses");
export const UserNotifications = () =>
  database<UserNotification>("userNotifications");
export const Notifications = () => database<Notification>("notifications");
export const UserReservations = () =>
  database<UserReservation>("userReservations");

export default database;
