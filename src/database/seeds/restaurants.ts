import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("restaurants").del();

  // Inserts seed entries
  await knex("restaurants").insert([
    {
      title: "Restaurante do pastel de bacalhau",
      description: "O Melhor pastel de bacalhau de Lisboa",
      addressId: 1,
    },
  ]);
}
