import { Request, Response } from 'express';
import getReservations from '../../data/user/getReservations';

export default async (
  req: Request<any, any, any, { startDate: string }>,
  res: Response,
) => {
  try {
    const { userId } = req;
    const { startDate } = req.query;

    const reservations = await getReservations(userId, { startDate });

    return res.json(reservations);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
