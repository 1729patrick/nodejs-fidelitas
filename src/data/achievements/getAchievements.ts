import { Achievements } from "../../database";
import { Achievement } from "../../../types/models/achievement";

export default async (restaurantId: number): Promise<Achievement[]> => {
  const achievements = await Achievements().where(
    "achievements.restaurantId",
    restaurantId
  );

  return achievements;
};
