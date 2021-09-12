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
  type: 'breakfast' | 'lunch' | 'dinner';
  status: 'canceled' | 'inReview' | 'confirmed';
  createdAt: string;
  updatedAt: string;
};
