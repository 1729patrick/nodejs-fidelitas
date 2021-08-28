import { Knex } from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("workHours").del();

  // Inserts seed entries
  await knex("workHours").insert([
    {
      sunday: "11:20 às 13:50, 18:30 às 22:00",
      monday: "11:20 às 13:50, 18:30 às 22:00",
      tuesday: "11:20 às 13:50, 18:30 às 22:00",
      wednesday: "11:20 às 13:50, 18:30 às 22:00",
      thursday: "11:20 às 13:50, 18:30 às 22:00",
      friday: "11:20 às 13:50, 18:30 às 22:00",
      saturday: "11:20 às 13:50, 18:30 às 22:00",
    },
  ]);

  await knex("addresses").del();

  // Inserts seed entries
  await knex("addresses").insert([
    {
      line1: "Avenida Orlando Pacheco",
      line2: "Torre 2, 09º Andar",
      postalCode: "1070-101",
      city: "Lisboa",
      responsible: "Cristiano Rolando",
      phone: "921238413",
      primary: true,
      notes: "",
    },
  ]);

  // Deletes ALL existing entries
  await knex("restaurants").del();

  // Inserts seed entries
  await knex("restaurants").insert([
    {
      name: "Restaurante do pastel de bacalhau",
      description: "O Melhor pastel de bacalhau de Lisboa",
      addressId: 1,
      workHoursId: 1,
    },
  ]);

  // Deletes ALL existing entries

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

  await knex("contacts").del();

  // Inserts seed entries
  await knex("contacts").insert([
    { contact: "912123821", type: "phone", restaurantId: 1 },
    { contact: "9128372132", type: "phone", restaurantId: 1 },
    { contact: "pasteu@bacalhau.com", type: "email", restaurantId: 1 },
  ]);

  await knex("facilities").del();

  // Inserts seed entries
  await knex("facilities").insert([
    { title: "Wi-fi" },
    { title: "Permitido Fumar" },
    { title: "Bebida alcoólica" },
    { title: "Bom para jantar" },
    { title: "Bom para almoças" },
  ]);

  await knex("restaurantFacilities").del();

  // Inserts seed entries
  await knex("restaurantFacilities").insert([
    { restaurantId: 1, facilityId: 1 },
    { restaurantId: 1, facilityId: 2 },
    { restaurantId: 1, facilityId: 3 },
    { restaurantId: 1, facilityId: 4 },
    { restaurantId: 1, facilityId: 5 },
  ]);
}
