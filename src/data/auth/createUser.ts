import { Users } from "../../database";
import bcrypt from "bcryptjs";
import { User } from "../../types/models/user";
import { Error, ErrorType } from "../../types/error";

export default async (user: User): Promise<number | Error> => {
  try {
    const checkEmail = await Users().where({ email: user.email }).first();
    if (checkEmail) {
      return { error: ErrorType.EmailAlreadyExists };
    }

    const checkPhone = await Users().where({ phone: user.phone }).first();
    if (checkPhone) {
      return { error: ErrorType.PhoneAlreadyExists };
    }

    user.password = bcrypt.hashSync(user.password, 10);

    const [createdUserId] = (await Users().insert(user).returning("id")) || [];

    return createdUserId;
  } catch (err) {
    return { message: err.message, error: ErrorType.UnhandledError };
  }
};
