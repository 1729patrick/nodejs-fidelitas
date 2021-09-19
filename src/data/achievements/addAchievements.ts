import { Achievements } from '../../database';
import { Achievement } from '../../../types/models/achievement';
import { AchievementBody } from '../../../types/requests/achievement';

export default async (
  restaurantId: number,
  achievement: AchievementBody,
): Promise<Achievement> => {
  const [achievementCreated] = await Achievements()
    .insert({ ...achievement, restaurantId })
    .returning('*');

  return achievementCreated;
};
