import { Request, Response } from "express";
import updateReserve from "../../data/restaurants/updateReserve";

export default async (req: Request, res: Response) => {
  try {
    const {reservationId} = req.params;
    const {  status, adminNotes } = req.body;

    const reservations = await updateReserve(reservationId, status, adminNotes);

    return res.json(reservations);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
