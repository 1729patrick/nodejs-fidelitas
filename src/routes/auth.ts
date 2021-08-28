import login from "../services/auth/login";
import { Router } from "express";
import register from "../services/auth/register";
import { celebrate, Joi, Segments } from "celebrate";
const router = Router();

router.route("/login").post(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      type: Joi.string().valid("admin", "client").default("client"),
      password: Joi.string().required(),
      restaurantId: Joi.number().required(),
    }),
  }),
  login
);
router.route("/register").post(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      type: Joi.string().valid("admin", "client").default("client"),
      phone: Joi.string().required(),
      email: Joi.string().required(),
      restaurantId: Joi.number().required(),
    }),
  }),
  register
);

export default router;
