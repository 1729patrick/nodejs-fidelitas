import { Router } from 'express';
import getAchievements from '../services/achievements/getAchievements';
import { celebrate, Joi, Segments } from 'celebrate';
import addAchievements from '../services/achievements/addAchievements';
import deleteRestaurantAchievement from '../services/achievements/deleteRestaurantAchievement';
import updateAchievement from "../services/achievements/updateAchievement";

const router = Router();

router.route('/').get(getAchievements);
router.route('/').post(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      type: Joi.string()
        .required()
        .valid(
          'shareApp',
          'visitRestaurant',
          'purchasePrice',
          'purchaseEvaluation',
        ),
      rewardType: Joi.string().required().valid('cash', 'product', 'discount'),
      rewardTitle: Joi.string().required(),
      rewardValue: Joi.number().required(),
      cost: Joi.number().required(),
      productId: Joi.number()
    }),
  }),
  addAchievements,
);

router.route('/:achievementId').put(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      achievementId: Joi.number().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string(),
      description: Joi.string(),
      type: Joi.string()
        .required()
        .valid(
          'shareApp',
          'visitRestaurant',
          'purchasePrice',
          'purchaseEvaluation',
        ),
      rewardType: Joi.string().valid('cash', 'product', 'discount'),
      rewardTitle: Joi.string(),
      rewardValue: Joi.number(),
      cost: Joi.number(),
      productId: Joi.number()
    }),
  }),
  updateAchievement,
);

router.route('/:achievementId').delete(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      achievementId: Joi.number().required(),
    }),
  }),
  deleteRestaurantAchievement,
);

export default router;
