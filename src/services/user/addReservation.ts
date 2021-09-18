import { Request, Response } from 'express';
import { ReservationBody } from '../../../types/requests/reservation';
import addReserve from '../../data/user/addReserve';

export default async (
  req: Request<any, any, ReservationBody>,
  res: Response,
) => {
  try {
    const { restaurantId, userId, userType } = req;

    if (userType !== 'admin' && req.body.userId) {
      return res.boom.unauthorized('You cannot add a reserve to another user.');
    }

    const reserve = await addReserve(userId, restaurantId, req.body);

    return res.json(reserve);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
