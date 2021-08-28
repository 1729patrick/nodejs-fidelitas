import { Request, Response } from "express";
import createUser from "../../data/auth/createUser";
import { Error } from "../../types/error";
import { User } from "../../types/models/user";

export default async (req: Request, res: Response) => {
  const user = req.body as User;

  const createdUserId = await createUser(user);

  if ((createdUserId as Error).error) {
    return res.status(400).json(createdUserId);
  }

  return res.json({ userId: createdUserId });
};
