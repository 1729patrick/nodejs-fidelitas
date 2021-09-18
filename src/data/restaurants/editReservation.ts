import { UserReservation } from "../../../types/models/userReservations";
import { UserReservations } from "../../database";

export default async (reservationId: number, status: any, adminNotes: string): Promise<UserReservation[]> => {
  const reservations = await UserReservations()
    .select('userReservations.*')
    .where("userReservations.id", reservationId)
    .update({status: status, adminNotes: adminNotes})
    .orderBy("date", "desc")
    .orderBy("time", "desc")
    .returning('*');

  return reservations;
};
