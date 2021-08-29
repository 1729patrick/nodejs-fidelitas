import { Router } from "express";
import getProducts from "../services/products/getProducts";

const router = Router();

router.route("/").get(getProducts);

export default router;
