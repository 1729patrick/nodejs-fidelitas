import { Router } from "express";
import getPurchases from "../services/purchases/getPurchases";

const router = Router();

router.route("/").get(getPurchases);

export default router;
