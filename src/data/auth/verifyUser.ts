import { Users } from "../../database";
import bcrypt from "bcryptjs";
import { User, UserType } from "../../../types/models/user";
import { ErrorType } from "../../../types/error";

export default async (
  email: string,
  type: UserType,
  password: string,
  restaurantId?: number
): Promise<User> => {


    const user = await Users()
      .where(type !== 'admin' ? {email, type, restaurantId} : {email, type})
      .select("users.*")
      .innerJoin("restaurants", "restaurants.id", "=", "users.restaurantId")
      .first();


  if (!user) {
    throw new Error(ErrorType.InvalidEmail);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new Error(ErrorType.InvalidPassword);
  }

  return user;
};
