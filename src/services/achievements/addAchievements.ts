import { Request, Response } from 'express';
import { AchievementBody } from '../../../types/requests/achievement';
import addAchievements from '../../data/achievements/addAchievements';

export default async (
  req: Request<any, any, AchievementBody>,
  res: Response,
) => {
  try {
    const { restaurantId } = req;
    const achievement = await addAchievements(restaurantId, req.body);

    return res.json(achievement);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
