import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import getRestaurant from '../services/restaurants/getRestaurant';
import getNotifications from '../services/restaurants/getNotifications';
import addNotifications from '../services/restaurants/addNotifications';
import authMiddleware from '../middlewares/auth';
import getRestaurantUsers from '../services/restaurants/getRestaurantUsers';
import deleteRestaurantUser from '../services/restaurants/deleteRestaurantUser';
import deleteNotifications from '../services/restaurants/deleteNotifications';
import getRestaurantFacilities from '../services/restaurants/getRestaurantFacilities';
import getReservations from '../services/restaurants/getReservations';
import updateReserve from '../services/restaurants/updateReserve';
import getPurchases from "../services/restaurants/getPurchases";

const router = Router();

router.route('/:restaurantId/details').get(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      restaurantId: Joi.number().required(),
    }),
  }),
  getRestaurant,
);

router.use(authMiddleware);

router.route('/notifications').get(getNotifications);

router.route('/reservations').get(getReservations);

router.route('/facilities').get(getRestaurantFacilities);

router.route('/users').get(getRestaurantUsers);

router.route('/purchases').get(getPurchases);

router.route('/notifications/add').post(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      type: Joi.string().required(),
    }),
  }),
  addNotifications,
);
router.route('/users/:userId').delete(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      userId: Joi.number().required(),
    }),
  }),
  deleteRestaurantUser,
);

router.route('/notifications/:notificationId').delete(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      notificationId: Joi.number().required(),
    }),
  }),
  deleteNotifications,
);

router.route('/reservations/:reservationId').put(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      reservationId: Joi.number().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      status: Joi.string().valid('canceled', 'inReview', 'confirmed').required(),
      adminNotes: Joi.string(),
    }),
  }),
  updateReserve,
);

export default router;
