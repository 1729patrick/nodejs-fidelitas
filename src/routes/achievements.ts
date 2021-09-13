import { Router } from "express";
import getAchievements from "../services/achievements/getAchievements";
import addAchievements from "../data/achievements/addAchievements";
import {celebrate, Joi, Segments} from "celebrate";

const router = Router();

router.route("/").get(getAchievements);
router.route("/add").put( celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    reward: Joi.string().required(),
    rewardValue: Joi.number().required(),
    cost: Joi.number().required(),
  }),
}),
  // @ts-ignore
  addAchievements,);

export default router;
