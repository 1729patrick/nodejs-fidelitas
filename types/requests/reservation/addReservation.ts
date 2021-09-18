import { ReservationType } from '../../models/userReservations';

export type ReservationBody = {
  userId: number;
  restaurantId: number;
  date: string;
  time: string;
  adults: number;
  kids?: number;
  babies?: number;
  type: ReservationType;
};
