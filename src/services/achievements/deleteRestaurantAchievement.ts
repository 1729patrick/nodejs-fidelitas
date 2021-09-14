import { Request, Response } from "express";

import deleteRestaurantAchievement from "../../data/achievements/deleteRestaurantAchievement";

export default async (
  req: Request,
  res: Response
) => {
  try {
    const { achievementId } = req.params;
    const { restaurantId } = req;

    const achievement = await deleteRestaurantAchievement(parseInt(String(achievementId)), restaurantId);
    return res.json(achievement);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
