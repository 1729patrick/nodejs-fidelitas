import { Request, Response } from "express";

import verifyUser from "../../data/auth/verifyUser";
import { LoginBody } from "../../../types/requests/auth/login";
import generateToken from "../../helpers/generateToken";

export default async (req: Request<any, any, LoginBody>, res: Response) => {
  try {
    const { password, type, email, restaurantId } = req.body;

    let user = await verifyUser(email, type, password, restaurantId);

    const token = generateToken(user);

    //@ts-ignore
    delete user.password;

    return res.json({ user, token });
  } catch (err: any) {
    return res.boom.unauthorized(err.message);
  }
};
