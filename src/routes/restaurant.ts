import { Router } from "express";
import register from "../services/auth/register";
import { celebrate, Joi, Segments } from "celebrate";
import getRestaurant from "../services/restaurant/getRestaurant";

const router = Router();

router.route("/:restaurantId").get(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      restaurantId: Joi.number().required(),
    }),
  }),
  //@ts-ignore
  getRestaurant
);

export default router;
