import { Router } from "express";
import getAddresses from "../services/addresses/getAddresses";

const router = Router();

router.route("/").get(getAddresses);

export default router;
