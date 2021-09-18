export type ReservationType = 'breakfast' | 'lunch' | 'dinner';
export type ReservationStatus = 'breakfast' | 'lunch' | 'dinner';

export type UserReservation = {
  id: number;
  date: string;
  time: string;
  adults: number;
  kids: number;
  babies: number;
  clientNotes?: string;
  adminNotes?: string;
  userId: number;
  restaurantId: number;
  type: ReservationType;
  status: ReservationStatus;
  createdAt: string;
  updatedAt: string;
};
