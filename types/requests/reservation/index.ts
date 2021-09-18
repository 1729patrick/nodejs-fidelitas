import {
  ReservationStatus,
  ReservationType,
} from '../../models/userReservations';

export type ReservationParams = { reservationId: string };

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

export type ReservationFilter = {
  startDate: string;
  status: ReservationStatus[];
};
