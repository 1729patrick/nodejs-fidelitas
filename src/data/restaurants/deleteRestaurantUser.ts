
import { User } from "../../../types/models/user";
import { Users } from "../../database";

export default async (id: number,
                   ): Promise<User[]> => {
  const user = await Users()
    .select('users.*')
    .where('users.id', id)
    .update({status: 'DELETED'})
    .returning('*')

  return user;
};
