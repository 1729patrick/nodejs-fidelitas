import database, { Users } from "../../database";
import bcrypt from "bcryptjs";
import { User, UserType } from "../../types/models/user";
import { Error, ErrorType } from "../../types/error";

export default async (
  email: string,
  type: UserType,
  password: string,
  restaurantId: number
): Promise<User | (Error & Partial<User>)> => {
  try {
    const user = await Users()
      .where({ email, type, restaurantId })
      .select("users.*")
      // .select(database.raw("users.*, ROW_TO_JSON(restaurants.*) AS restaurant"))
      .innerJoin("restaurants", "restaurants.id", "=", "users.restaurantId")
      .first();

    if (!user) {
      return { error: ErrorType.InvalidEmail };
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return { error: ErrorType.InvalidPassword };
    }

    return user;
  } catch (err) {
    return { message: err.message, error: ErrorType.UnhandledError };
  }
};
