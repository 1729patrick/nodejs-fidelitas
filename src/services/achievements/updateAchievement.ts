import { Request, Response } from 'express';
import { AchievementBody } from '../../../types/requests/achievement';
import updateAchievement from "../../data/achievements/updateAchievement";

export default async (
  req: Request<any, any, AchievementBody>,
  res: Response,
) => {
  try {
    const {achievementId} = req.params;
    const {restaurantId} = req;

    const achievement = await updateAchievement( restaurantId, achievementId, req.body);

    return res.json(achievement);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
