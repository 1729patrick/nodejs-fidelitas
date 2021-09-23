import { Achievements } from '../../database';
import { Achievement } from '../../../types/models/achievement';
import { AchievementBody } from '../../../types/requests/achievement';

export default async (
  restaurantId: number,
  achievementId: number,
  achievement: AchievementBody,
): Promise<Achievement> => {
  const [achievementUpdated] = await Achievements()
    .where('id', achievementId)
    .where('restaurantId', restaurantId)
    .update({ ...achievement })
    .returning('*');

  return achievementUpdated;
};
