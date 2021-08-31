import { Request, Response } from "express";
import getPurchases from "../../data/purchases/getPurchases";

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const purchases = await getPurchases(userId);

    return res.json(purchases);
  } catch (err) {
    return res.boom.badRequest(err.message);
  }
};
