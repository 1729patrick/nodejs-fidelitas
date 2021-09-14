export type AchievementType =
  | "ACTIVE"
  | "DELETED";


export type Achievement = {
  id: string;
  title: string;
  description: string;
  type: "cash" | "product" | "discount";
  reward: string;
  rewardValue: number;
  cost: number;
  status: AchievementType;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
