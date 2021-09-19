export type AchievementStatus = 'ACTIVE' | 'DELETED';
export type AchievementType =
  | 'shareApp'
  | 'visitRestaurant'
  | 'purchasePrice'
  | 'purchaseEvaluation';
export type RewardType = 'cash' | 'product' | 'discount';

export type Achievement = {
  id: string;
  title: string;
  description: string;
  type: AchievementType;
  rewardTitle: string;
  rewardType: RewardType;
  rewardValue: number;
  purchasePrice?: number;
  cost: number;
  status: AchievementStatus;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
