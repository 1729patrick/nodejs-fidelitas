export type PurchaseReview = {
  id: number;
  review?: string;
  rewardComplete: boolean;
  restaurantId: number;
  userId: number;
  purchaseId: number;
  createdAt: string;
  updatedAt: string;
};
