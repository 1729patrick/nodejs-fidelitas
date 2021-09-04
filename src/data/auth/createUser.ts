import { Users } from "../../database";
import bcrypt from "bcryptjs";
import { User } from "../../../types/models/user";
import { ErrorType } from "../../../types/error";

export default async (user: User): Promise<User> => {
  const checkEmail = await Users().where({ email: user.email }).first();
  if (checkEmail) {
    throw Error(ErrorType.EmailAlreadyExists);
  }

  const checkPhone = await Users().where({ phone: user.phone }).first();
  if (checkPhone) {
    throw Error(ErrorType.PhoneAlreadyExists);
  }

  user.password = bcrypt.hashSync(user.password, 10);

  const [createdUserId] = (await Users().insert(user).returning("id")) || [];

  if (!createdUserId) {
    throw new Error(ErrorType.UnhandledError);
  }

  const createdUser = await Users().where({ id: createdUserId }).first();

  return createdUser as User;
};
