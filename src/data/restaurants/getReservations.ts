import { UserReservation } from "../../../types/models/userReservations";
import { UserReservations } from "../../database";

export default async (restaurantId: number): Promise<UserReservation[]> => {
  const reservations = await UserReservations()
    .select('userReservations.*')
    .select('users.firstName')
    .where("userReservations.restaurantId", restaurantId)
    .leftJoin('users', 'users.id', 'userReservations.userId')
    .orderBy("date", "desc")
    .orderBy("time", "desc");

  return reservations;
};
