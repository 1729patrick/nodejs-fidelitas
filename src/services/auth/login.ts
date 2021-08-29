import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import verifyUser from "../../data/auth/verifyUser";
import { LoginBody } from "../../../types/requests/auth/login";

export default async (req: Request<any, any, LoginBody>, res: Response) => {
  try {
    const { password, type, email, restaurantId } = req.body;

    let user = await verifyUser(email, type, password, restaurantId);

    const token = jwt.sign(
      { userId: user.id, restaurantId: user.restaurantId, userType: user.type },
      process.env?.SECRET || "fidelitas",
      {
        expiresIn: process.env.EXPIRE_IN,
      }
    );

    //@ts-ignore
    delete user.password;

    return res.json({ user, token });
  } catch (err) {
    return res.boom.badRequest(err.message);
  }
};
