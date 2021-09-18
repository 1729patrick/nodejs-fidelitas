import { UserReservation } from '../../../types/models/userReservations';
import { ReservationBody } from '../../../types/requests/reservation/addReservation';
import { UserReservations } from '../../database';

export default async (
  userId: number,
  restaurantId: number,
  reserve: ReservationBody,
): Promise<UserReservation> => {
  const [userReservation] = await UserReservations()
    .insert({ ...reserve, userId, restaurantId })
    .returning('*');

  return userReservation;
};
