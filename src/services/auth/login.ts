import { Request, Response } from "express";
import verifyUser from "../../data/auth/verifyUser";

export default async (req: Request, res: Response) => {
  const users = await verifyUser();

  return res.json({ users });
};
