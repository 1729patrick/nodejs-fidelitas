import { Knex } from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("workHours").del();

  await knex("workHours").insert([
    {
      sunday: {
        breakfast: "06:30 às 09:30",
        lunch: "11:20 às 13:50",
        dinner: "18:30 às 22:00",
      },

      monday: {
        breakfast: "06:30 às 09:30",
        lunch: "11:20 às 13:50",
        dinner: "18:30 às 22:00",
      },
      tuesday: {
        breakfast: "06:30 às 09:30",
        lunch: "11:20 às 13:50",
        dinner: "18:30 às 22:00",
      },
      wednesday: {
        breakfast: "06:30 às 09:30",
        lunch: "11:20 às 13:50",
        dinner: "18:30 às 22:00",
      },
      thursday: {
        breakfast: "06:30 às 09:30",
        lunch: "11:20 às 13:50",
        dinner: "18:30 às 22:00",
      },
      friday: {
        breakfast: "06:30 às 09:30",
        lunch: "11:20 às 13:50",
        dinner: "18:30 às 22:00",
      },
      saturday: {
        breakfast: "06:30 às 09:30",
        lunch: "11:20 às 13:50",
        dinner: "18:30 às 22:00",
      },
    },
  ]);

  await knex("addresses").del();

  await knex("addresses").insert([
    {
      line1: "Avenida Orlando Pacheco",
      line2: "Torre 2, 09º Andar",
      postalCode: "1070-101",
      city: "Lisboa",
      responsible: "Cristiano Rolando",
      phone: "9212384132",
      primary: true,
      notes: "",
    },
  ]);

  // Deletes ALL existing entries
  await knex("restaurants").del();

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

  await knex("addresses").insert([
    {
      line1: "Avenida Orlando Pacheco",
      line2: "Torre 2, 2º Andar",
      postalCode: "1234-421",
      city: "Lisboa",
      responsible: "Cristiano Rolando",
      phone: "921238413",
      primary: true,
      notes: "",
      userId: 1,
    },
    {
      line1: "Avenida Pacheco Orlando",
      line2: "Torre 2, 10º Andar",
      postalCode: "2151-456",
      city: "Lisboa",
      responsible: "Cristiano Rolando",
      phone: "921238413",
      primary: false,
      notes: "",
      userId: 1,
    },
    {
      line1: "Avenida Orlando Pacheco",
      line2: "Torre 2, 03º Andar",
      postalCode: "1256-362",
      city: "Lisboa",
      responsible: "Cristiano Rolando",
      phone: "921238413",
      primary: true,
      notes: "",
      userId: 2,
    },
    {
      line1: "Avenida Pacheco Orlando",
      line2: "Torre 2, 19º Andar",
      postalCode: "2762-347",
      city: "Lisboa",
      responsible: "Cristiano Rolando",
      phone: "921238413",
      primary: false,
      notes: "",
      userId: 2,
    },
  ]);

  await knex("contacts").del();

  await knex("contacts").insert([
    { contact: "912123821", type: "phone", restaurantId: 1 },
    { contact: "9128372132", type: "phone", restaurantId: 1 },
    { contact: "pasteu@bacalhau.com", type: "email", restaurantId: 1 },
  ]);

  await knex("notifications").del();

  await knex("notifications").insert([
    {
      type: "email",
      title: "Bem vindo",
      description: "Avenida Pacheco Orlando e Cristiano Rolando",
      restaurantId: 1,
    },
    {
      type: "pushNotification",
      title: "Bem vindo",
      description: "Avenida Pacheco Orlando e Cristiano Rolando",
      restaurantId: 1,
    },
    {
      type: "sms",
      title: "Bem vindo",
      description: "Avenida Pacheco Orlando e Cristiano Rolando",
      restaurantId: 1,
    },
  ]);

  await knex("userNotifications").del();

  await knex("userNotifications").insert([
    {
      userId: 1,
      notificationId: 1,
    },
    {
      userId: 1,
      notificationId: 2,
      read: true,
    },
    {
      userId: 1,
      notificationId: 3,
    },
    {
      userId: 2,
      notificationId: 1,
    },
    {
      userId: 2,
      notificationId: 2,
    },
    {
      userId: 2,
      notificationId: 3,
      read: true,
    },
  ]);

  await knex("facilities").del();

  await knex("facilities").insert([
    { title: "Wi-fi" },
    { title: "Permitido Fumar" },
    { title: "Bebida alcoólica" },
    { title: "Bom para jantar" },
    { title: "Bom para almoças" },
  ]);

  await knex("userReservations").del();

  await knex("userReservations").insert([
    {
      date: "2021-09-01",
      time: "24:00",
      adults: 3,
      kids: 2,
      babies: 0,
      userId: 1,
      restaurantId: 1,
    },
    {
      date: "2021-09-01",
      time: "12:00",
      adults: 3,
      kids: 0,
      babies: 0,
      userId: 1,
      restaurantId: 1,
    },
    {
      date: "2021-09-01",
      time: "08:00",
      adults: 3,
      kids: 2,
      babies: 0,
      userId: 2,
      restaurantId: 1,
    },
    {
      date: "2021-09-01",
      time: "12:00",
      adults: 3,
      kids: 0,
      babies: 0,
      userId: 2,
      restaurantId: 1,
    },
  ]);

  await knex("restaurantFacilities").del();

  await knex("restaurantFacilities").insert([
    { restaurantId: 1, facilityId: 1 },
    { restaurantId: 1, facilityId: 2 },
    { restaurantId: 1, facilityId: 3 },
    { restaurantId: 1, facilityId: 4 },
    { restaurantId: 1, facilityId: 5 },
  ]);

  await knex("products").del();

  await knex("files").del();

  await knex("files").insert([
    {
      originalName: "background_home.jpg",
      bucketName: "fidelitas-general",
      fileName: "8d1b5d1262bec8042b17d4d2e14cdcbd.jpg",
    },
  ]);

  await knex("products").insert([
    {
      title: "Pastel de bacalhau",
      description: "O melhor pastel de bacalhau",
      ingredients: "Farinha de trigo, aminoácidos, conservantes vegetais",
      allergens: "Gluten",
      price: 10.49,
      type: "side",
      restaurantId: 1,
      imageId: 1,
    },
    {
      title: "Pastel de carne",
      description: "O melhor pastel de carne",
      ingredients: "Farinha de trigo, aminoácidos, conservantes vegetais",
      allergens: "Gluten",
      price: 10.49,
      type: "side",
      restaurantId: 1,
      imageId: 1,
    },
    {
      title: "Pastel de frango",
      description: "O melhor pastel de frango",
      ingredients: "Farinha de trigo, aminoácidos, conservantes vegetais",
      allergens: "Gluten",
      price: 10.49,
      type: "side",
      restaurantId: 1,
      imageId: 1,
    },
  ]);

  await knex("achievements").del();

  await knex("achievements").insert([
    {
      title: "Critico do bacalhau",
      description: "Nos conte o que achou sobre o pedido feito pela aplicação",
      type: "product",
      reward: "Pastel de Frango",
      rewardValue: 1,
      cost: 10,
      restaurantId: 1,
      productId: 1,
    },
    {
      title: "Critico do bacalhau",
      description: "Nos conte o que achou sobre o pedido feito pela aplicação",
      type: "cash",
      reward: "10 €",
      rewardValue: 10,
      cost: 5,
      restaurantId: 1,
    },
    {
      title: "Critico do bacalhau",
      description: "Nos conte o que achou sobre o pedido feito pela aplicação",
      type: "discount",
      reward: "25% de desconto na próxima refeição",
      rewardValue: 25,
      cost: 20,
      restaurantId: 1,
    },
  ]);
}
