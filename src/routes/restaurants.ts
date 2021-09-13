import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import getRestaurant from "../services/restaurants/getRestaurant";
import getNotifications from "../services/restaurants/getNotifications";
import addNotifications from "../services/restaurants/addNotifications";
import authMiddleware from "../middlewares/auth";
import getRestaurantUsers from "../services/restaurants/getRestaurantUsers";

const router = Router();

router.route("/:restaurantId/details").get(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      restaurantId: Joi.number().required(),
    }),
  }),
  getRestaurant
);

router.use(authMiddleware);

router.route("/notifications/:restaurantId").get(celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      restaurantId: Joi.number().required(),
    }),
  }),
  getNotifications
);

router.route('/users').get(getRestaurantUsers);

router.route("/notifications/add").put(celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      type: Joi.string().required()
    }),
  }),
  addNotifications
);



export default router;
