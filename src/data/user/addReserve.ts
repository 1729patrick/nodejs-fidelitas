import { UserReservation } from "../../../types/models/userReservations";
import { UserReservations } from "../../database";

export default async (userId: number, restaurantId: number, date: string, time: string, adults: number, kids: number, babies: number): Promise<UserReservation[]> => {


  const userReservation = await UserReservations()
    .insert({date:date, time: time, adults: adults, kids: kids, babies: babies, userId: userId, restaurantId: restaurantId })
    .returning('*');

  return userReservation;
};
