import { Router } from 'express';
import getNotifications from '../services/user/getNotifications';
import getReservations from '../services/user/getReservations';
import { celebrate, Joi, Segments } from 'celebrate';
import addReservation from '../services/user/addReservation';
import getRestaurantUsers from '../services/user/getRestaurantUsers';
import getAddresses from '../services/user/getAddresses';
import getPayments from '../services/user/getPayments';

const router = Router();

router.route('/notifications').get(getNotifications);
router.route('/reservations').get(getReservations);
router.route('/addresses').get(getAddresses);
router.route('/payments').get(getPayments);
router.route('/restaurantUsers').get(getRestaurantUsers);
router.route('/reservations').put(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      date: Joi.date().required(),
      time: Joi.string()
        .regex(/^([0-9]{2})\:([0-9]{2})$/)
        .required(),
      adults: Joi.number(),
      kids: Joi.number(),
      babies: Joi.number(),
      userId: Joi.number().required(),
      restaurantId: Joi.number().required(),
    }),
  }),
  addReservation,
);

export default router;
