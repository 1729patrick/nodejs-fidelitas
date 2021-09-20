import { UserReservation } from "../../../types/models/userReservations";
import { UserReservations } from "../../database";

export default async (reservationId: string, status: any, adminNotes: string): Promise<UserReservation> => {
  const [reservation]  = await UserReservations()
    .where("userReservations.id", reservationId)
    .update({status: status, adminNotes: adminNotes})
    .returning('*');

  return reservation;
};
