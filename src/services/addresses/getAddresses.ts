import { Request, Response } from "express";
import getAddresses from "../../data/addresses/getAddresses";

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const addresses = await getAddresses(userId);

    return res.json(addresses);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
