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
  createdAt: string;
  updatedAt: string;
};
