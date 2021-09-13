import { Request, Response } from "express";
import addAchievements from "../../data/achievements/addAchievements";

export default async (req: Request, res: Response) => {
  try {

    const {title,
      description,
      type,
      reward,
      rewardValue,
      cost} = req.body;

    const { restaurantId } = req;
    const achievement = await addAchievements(title,
      description,
      type,
      reward,
      rewardValue,
      cost,
      parseInt(String(restaurantId)));

    return res.json(achievement);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
