import { Router } from "express";
import getNotifications from "../services/user/getNotifications";
import getReservations from "../services/user/getReservations";
import {celebrate, Joi, Segments} from "celebrate";
import addReservation from "../services/user/addReservation";


const router = Router();

router.route("/notifications").get(getNotifications);
router.route("/reservations").get(getReservations);
router.route('/reservations').put(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      date: Joi.date().required(),
      time: Joi.date().required(),
      adults: Joi.number().required(),
      kids: Joi.number(),
      babies: Joi.number().required(),
      userId: Joi.number().required(),
      restaurantId: Joi.number().required(),
    }),
  }),
  addReservation,
);



export default router;
