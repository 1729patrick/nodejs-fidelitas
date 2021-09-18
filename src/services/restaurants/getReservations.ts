import { Request, Response } from "express";
import getReservations from "../../data/restaurants/getReservations";

export default async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req;

    const reservations = await getReservations(restaurantId);

    return res.json(reservations);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
