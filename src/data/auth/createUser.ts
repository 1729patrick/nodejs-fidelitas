import { Users } from "../../database";
import bcrypt from "bcryptjs";
import { User } from "../../types/models/user";

export default async (user: User): Promise<number> => {
  const checkUsername = await Users.where({ username: user.username });
  if (checkUsername) {
    //invalid username
  }

  const checkEmail = await Users.where({ email: "user.email" });
  if (checkEmail) {
    //email in use
  }

  // const checkPhone = await Users.where({ phone: user.phone });
  // if (checkPhone) {
  //   //phone in use
  // }

  user.password = bcrypt.hashSync(user.password, 10);

  const [createdUserId] = (await Users.insert(user).returning("id")) || [];

  return createdUserId;
};
