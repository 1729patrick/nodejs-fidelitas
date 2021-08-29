import { Request, Response } from "express";
import createUser from "../../data/auth/createUser";
import { User } from "../../../types/models/user";

export default async (req: Request<any, any, User>, res: Response) => {
  try {
    const userId = await createUser(req.body);

    return res.json({ userId });
  } catch (err) {
    return res.boom.badRequest(err.message);
  }
};
