import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import verifyUser from "../../data/auth/verifyUser";
import { LoginBody } from "../../types/requests/auth/login";

export default async (req: Request, res: Response) => {
  const { password, username } = req.body as LoginBody;

  const user = await verifyUser(username, password);

  const token = jwt.sign({ id: user?.id }, process.env?.SECRET || "fidelitas", {
    expiresIn: process.env.EXPIRE_IN,
  });

  return res.json({ user, token });
};
