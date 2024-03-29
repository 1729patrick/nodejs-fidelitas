import { Request, Response } from 'express';
import getPurchases from '../../data/user/getPurchases';

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const purchases = await getPurchases(userId);

    return res.json(purchases);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
