import { Request, Response } from "express";
import getAchievements from "../../data/achievements/getAchievements";

export default async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req;

    const achievements = await getAchievements(restaurantId);

    return res.json(achievements);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
