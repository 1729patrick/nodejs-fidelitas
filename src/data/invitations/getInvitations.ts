import database, { Achievements, Purchases, Users } from '../../database';
import { Achievement } from '../../../types/models/achievement';

export default async (userId: number): Promise<any> => {
  const [{ referralCode }] = await Users()
    .where({ id: userId })
    .select('referralCode');

  const users = await Users()
    .where({ invitationCode: referralCode })
    .select('id');

  const usersId = users.map(({ id }) => id);

  const invitations = await Users()
    .leftJoin('purchases', 'users.id', 'purchases.userId')
    .whereIn('users.id', usersId)
    .select('users.id', 'users.firstName', 'users.lastName', 'users.createdAt')
    .select(
      database.raw(
        'CASE WHEN COUNT(purchases.id) > 0 THEN true ELSE false END completed',
      ),
    )
    .groupBy('users.id')
    .orderBy('completed', 'desc')
    .orderBy('users.createdAt', 'asc');

  return invitations;
};
