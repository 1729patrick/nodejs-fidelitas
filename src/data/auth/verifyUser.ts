import database from "../../database";

export default async () => {
  const user = await database.from("users");

  return user;
};
