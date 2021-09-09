import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import getRestaurant from "../services/restaurants/getRestaurant";
import getNotifications from "../services/restaurants/getNotifications";

const router = Router();

router.route("/:restaurantId").get(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      restaurantId: Joi.number().required(),
    }),
  }),
  getRestaurant
);

router.route("/notifications/:restaurantId").get(celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      restaurantId: Joi.number().required(),
    }),
  }),
  getNotifications
);



export default router;
