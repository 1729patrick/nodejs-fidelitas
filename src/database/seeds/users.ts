import { Knex } from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      firstName: "Patrick",
      lastName: "Battisti Forsthofer",
      password: bcrypt.hashSync("pbf", 10),
      type: "admin",
      phone: "921238413",
      email: "pbf",
      restaurantId: 1,
    },
    {
      firstName: "Tomás",
      lastName: "Santos",
      password: bcrypt.hashSync("ts", 10),
      type: "admin",
      phone: "9212384123",
      email: "ts",
      restaurantId: 1,
    },
  ]);
}
