import { Request, Response } from "express";
import editReservation from "../../data/restaurants/editReservation";

export default async (req: Request, res: Response) => {
  try {
    const { reservationId, status, adminNotes } = req.body;

    const reservations = await editReservation(reservationId, status, adminNotes);

    return res.json(reservations);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
