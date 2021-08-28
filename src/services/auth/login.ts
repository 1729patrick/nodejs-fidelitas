import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import verifyUser from "../../data/auth/verifyUser";
import { Error } from "../../types/error";
import { LoginBody } from "../../types/requests/auth/login";

export default async (req: Request, res: Response) => {
  const { password, type, email, restaurantId } = req.body as LoginBody;
  const user = await verifyUser(email, type, password, restaurantId);

  if ((user as Error).error) {
    return res.status(400).json(user);
  }

  const token = jwt.sign(
    { userId: user.id, restaurantId: user.restaurantId, userType: user.type },
    process.env?.SECRET || "fidelitas",
    {
      expiresIn: process.env.EXPIRE_IN,
    }
  );

  delete user.password;
  return res.json({ user, token });
};
