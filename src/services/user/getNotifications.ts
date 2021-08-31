import { Request, Response } from "express";
import getNotifications from "../../data/user/getNotifications";

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const addresses = await getNotifications(userId);

    return res.json(addresses);
  } catch (err) {
    return res.boom.badRequest(err.message);
  }
};
