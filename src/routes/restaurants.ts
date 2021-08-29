import { Router } from "express";
import getRestaurant from "../services/restaurants/getRestaurant";

const router = Router();

router.route("/").get(getRestaurant);

export default router;
