import { UserReservation } from '../../../types/models/userReservations';
import { ReservationBody } from '../../../types/requests/reservation';
import { UserReservations } from '../../database';

export default async (
  reservationId: string,
  reserve: ReservationBody,
): Promise<UserReservation> => {
  const [userReservation] = await UserReservations()
    .where('id', reservationId)
    .update(reserve)
    .returning('*');

  return userReservation;
};
