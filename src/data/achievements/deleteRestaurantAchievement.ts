
import { Achievement } from "../../../types/models/achievement";
import { Achievements } from "../../database";

export default async (id: number, restaurantId: number
): Promise<Achievement[]> => {
  const achievement = await Achievements()
    .select('achievements.*')

    .where('achievements.id', id)
    .where('achievements.restaurantId', restaurantId)
    .update({status: 'DELETED'})
    .returning('*')

  return achievement;
};
