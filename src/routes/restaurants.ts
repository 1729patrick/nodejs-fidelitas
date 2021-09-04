import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import getRestaurant from "../services/restaurants/getRestaurant";

const router = Router();

router.route("/:restaurantId").get(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      restaurantId: Joi.number().required(),
    }),
  }),
  getRestaurant
);

export default router;
