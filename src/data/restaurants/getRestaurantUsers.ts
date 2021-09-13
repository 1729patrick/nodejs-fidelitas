import database, { Users } from "../../database";
import { User } from "../../../types/models/user";


export default async (id: number): Promise<User[]> => {
  const users = await Users()
    .select('users.*')
    .where('purchases.restaurantId', '=', id)
    .where('users.restaurantId', '=', id)
    .leftJoin('purchases', 'purchases.userId', 'users.id')
    .sum({totalPurchases: 'purchases.total'})
    .count({visits: 'purchases'})
    .groupBy('users.id')
    .returning('*');

  return users.map(({password, ...user}) =>  user);
}
