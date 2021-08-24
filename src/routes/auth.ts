import login from "../services/auth/login";
import { Router } from "express";

const router = Router();

router.route("/login").get(login);

export default router;
