import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import getReferralCode from '../services/referral/getReferralCode';

const router = Router();

router.route('/:code').get(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      code: Joi.string().required().min(6),
    }),
  }),
  getReferralCode,
);

export default router;
