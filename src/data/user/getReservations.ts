import { UserReservation } from '../../../types/models/userReservations';
import { UserReservations } from '../../database';

export default async (
  userId: number,
  filter: { startDate: string },
): Promise<UserReservation[]> => {
  const query = UserReservations()
    .select('userReservations.*')
    .select('users.firstName')
    .where('userId', userId)
    .leftJoin('users', 'users.id', 'userReservations.userId')
    .orderBy('date', 'asc')
    .orderBy('time', 'asc');

  if (filter.startDate) {
    query.andWhere('userReservations.date', '>=', filter.startDate);
  }

  console.log(filter.startDate);

  const reservations = await query;

  return reservations;
};
