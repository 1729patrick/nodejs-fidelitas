import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("addresses").del();

  // Inserts seed entries
  await knex("addresses").insert([
    {
      address1: "Avenida Orlando Pacheco",
      address2: "Torre 2, 09º Andar",
      postalCode: "1070-101",
      city: "Lisboa",
      responsible: "Cristiano Rolando",
      phone: "921238413",
      primary: true,
      notes: "",
      //   userId: 1,
      //   restaurantId: 1,
    },
  ]);
}
