import { Request, Response } from 'express';
import { ReservationFilter } from '../../../types/requests/reservation';
import getReservations from '../../data/user/getReservations';

export default async (
  req: Request<any, any, any, ReservationFilter>,
  res: Response,
) => {
  try {
    const { userId } = req;

    const reservations = await getReservations(userId, req.query);

    return res.json(reservations);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
