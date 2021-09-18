import { Router } from 'express';
import getNotifications from '../services/user/getNotifications';
import getReservations from '../services/user/getReservations';
import { celebrate, Joi, Segments } from 'celebrate';
import addReservation from '../services/user/addReservation';
import getAddresses from '../services/user/getAddresses';
import getPayments from '../services/user/getPayments';
import getPurchases from '../services/user/getPurchases';
import {
  addReservationValidator,
  updateReservationValidator,
} from '../validators/reservation';
import updateReservation from '../services/user/updateReservation';

const router = Router();

router.route('/notifications').get(getNotifications);
router.route('/reservations').get(
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      startDate: Joi.string().isoDate(),
    }),
  }),
  getReservations,
);
router.route('/addresses').get(getAddresses);
router.route('/payments').get(getPayments);
router.route('/purchases').get(getPurchases);

router.route('/reservations').post(addReservationValidator, addReservation);

router
  .route('/reservations/:reservationId')
  .put(updateReservationValidator, updateReservation);

export default router;
