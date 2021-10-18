import { PurchaseReviews } from '../../database';

export default async (userId: number): Promise<any> => {
  const invitations = await PurchaseReviews()
    .where('userId', userId)
    .andWhere('rewardComplete', false)
    .orderBy('createdAt', 'asc');

  return invitations;
};
