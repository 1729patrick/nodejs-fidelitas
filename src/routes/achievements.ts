import { Router } from "express";
import getAchievements from "../services/achievements/getAchievements";

const router = Router();

router.route("/").get(getAchievements);

export default router;
