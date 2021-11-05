import { Router } from 'express';
import {celebrate, Joi, Segments} from "celebrate";
import purchase from "../services/purchases/purchase";

const router = Router();

// router.route("/").get();

router.route("/").post(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      deliveryType: Joi.string().required(),
      promotionCode: Joi.string(),
      subTotal: Joi.number().required(),
      discount: Joi.number().required(),
      total: Joi.number().required(),
      paymentId: Joi.number(),
      addressId: Joi.number().required(),
    }),
  }),
  purchase,
);

export default router;
