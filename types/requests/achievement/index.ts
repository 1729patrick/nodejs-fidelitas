import { AchievementType, RewardType } from '../../models/achievement';

export type AchievementBody = {
  title: string;
  description: string;
  type: AchievementType;
  rewardTitle: string;
  rewardType: RewardType;
  rewardValue: number;
  purchasePrice?: number;
  cost: number;
};
