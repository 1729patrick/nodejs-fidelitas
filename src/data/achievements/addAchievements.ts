import database, { Achievements } from "../../database";
import { Achievement } from "../../../types/models/achievement";

export default async ( title: string,
                       description: string,
                       type: any,
                       reward: string,
                       rewardValue: number,
                       cost: number,
                       restaurantId: number): Promise<Achievement[]> => {

  const achievements = await Achievements()
    .insert({
      title,
      description,
      type,
      reward,
      rewardValue,
      cost,
      restaurantId
    })
    .returning('*');

  return achievements;
};
