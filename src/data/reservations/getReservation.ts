import { UserReservation } from '../../../types/models/userReservations';
import { UserReservations } from '../../database';

export default async (
  reservationId: string,
): Promise<UserReservation | undefined> => {
  const reservation = await UserReservations()
    .where('userReservations.id', reservationId)
    .first();

  return reservation;
};
