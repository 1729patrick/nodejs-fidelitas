import { UserReservation } from '../../../types/models/userReservations';
import { ReservationFilter } from '../../../types/requests/reservation';
import { UserReservations } from '../../database';

export default async (
  userId: number,
  filter: ReservationFilter,
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

  if (filter.status?.length) {
    query.whereIn('userReservations.status', filter.status);
  }

  console.log(filter.startDate);

  const reservations = await query;

  return reservations;
};
