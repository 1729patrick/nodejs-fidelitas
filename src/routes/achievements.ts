import { Router } from 'express';
import getAchievements from '../services/achievements/getAchievements';
import { celebrate, Joi, Segments } from 'celebrate';
import addAchievements from '../services/achievements/addAchievements';
import deleteRestaurantAchievement from '../services/achievements/deleteRestaurantAchievement';

const router = Router();

router.route('/').get(getAchievements);
router.route('/add').post(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      type: Joi.string().required(),
      reward: Joi.string().required(),
      rewardValue: Joi.number().required(),
      cost: Joi.number().required(),
    }),
  }),
  addAchievements,
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
