import { UserReservation } from "../../../types/models/userReservations";
import { UserReservations } from "../../database";

export default async (userId: number): Promise<UserReservation[]> => {
  const reservations = await UserReservations()
    .where("userId", userId)
    .orderBy("date", "desc")
    .orderBy("time", "desc");

  return reservations;
};
