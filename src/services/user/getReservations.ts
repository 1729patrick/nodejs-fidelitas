import { Request, Response } from "express";
import getReservations from "../../data/user/getReservations";

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const reservations = await getReservations(userId);

    return res.json(reservations);
  } catch (err) {
    return res.boom.badRequest(err.message);
  }
};
