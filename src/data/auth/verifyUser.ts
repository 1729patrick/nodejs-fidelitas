import { Users } from "../../database";
import bcrypt from "bcryptjs";
import { User } from "../../types/models/user";

export default async (
  username: string,
  password: string
): Promise<User | undefined> => {
  const user = await Users.where({ username })
    .first()
    .then((row: any) => row);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return undefined;
  }

  return user;
};
