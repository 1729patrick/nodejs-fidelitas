import { Router } from "express";
import getNotifications from "../services/user/getNotifications";
import getReservations from "../services/user/getReservations";

const router = Router();

router.route("/notifications").get(getNotifications);
router.route("/reservations").get(getReservations);

export default router;
