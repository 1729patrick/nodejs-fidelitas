import { Request, Response } from "express";
import createUser from "../../data/auth/createUser";
import { User } from "../../types/models/user";

export default async (req: Request, res: Response) => {
  const user = req.body as User;

  const createdUserId = await createUser(user);

  return res.json({ userId: createdUserId });
};
