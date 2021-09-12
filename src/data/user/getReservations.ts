import { UserReservation } from "../../../types/models/userReservations";
import { UserReservations } from "../../database";

export default async (userId: number): Promise<UserReservation[]> => {
  const reservations = await UserReservations()
    .select('userReservations.*')
    .select('users.firstName')
    .where("userId", userId)
    .leftJoin('users', 'users.id', 'userReservations.userId')
    .orderBy("date", "desc")
    .orderBy("time", "desc");

  return reservations;
};
