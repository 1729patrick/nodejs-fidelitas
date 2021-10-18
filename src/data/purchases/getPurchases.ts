import { Purchases } from '../../database';

export default async (userId: number): Promise<any> => {
  const invitations = await Purchases()
    .where('userId', userId)
    .andWhere('total', '>=', 50)
    .orderBy('createdAt', 'asc');

  return invitations;
};
