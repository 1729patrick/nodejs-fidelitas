import { Request, Response } from 'express';
import {
  ReservationBody,
  ReservationParams,
} from '../../../types/requests/reservation/addReservation';
import getReservation from '../../data/reservations/getReservation';
import updateReserve from '../../data/user/updateReserve';

export default async (
  req: Request<ReservationParams, any, ReservationBody>,
  res: Response,
) => {
  try {
    const { userId, userType } = req;

    const reservation = await getReservation(req.params.reservationId);

    if (!reservation) {
      return res.boom.notFound('Reserve not found.');
    }

    if (userType !== 'admin' && reservation?.userId !== userId) {
      return res.boom.unauthorized(
        'You cannot update a reserve from another user.',
      );
    }

    const reserve = await updateReserve(req.params.reservationId, req.body);

    return res.json(reserve);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
