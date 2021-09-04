import { Request, Response } from "express";
import createUser from "../../data/auth/createUser";
import { User } from "../../../types/models/user";
import generateToken from "../../helpers/generateToken";

export default async (req: Request<any, any, User>, res: Response) => {
  try {
    const user = await createUser(req.body);

    const token = generateToken(user);

    //@ts-ignore
    delete user.password;

    return res.json({ user, token });
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
