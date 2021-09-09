import { Users } from "../../database";
import { User } from "../../../types/models/user";


export default async (id: number): Promise<User[]> => {
  const users =  Users()
    .select('users.*')
    .where('restaurantId', '=', id)
  return users;
}
