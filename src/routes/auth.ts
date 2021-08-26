import login from "../services/auth/login";
import { Router } from "express";
import register from "../services/auth/register";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);

export default router;
