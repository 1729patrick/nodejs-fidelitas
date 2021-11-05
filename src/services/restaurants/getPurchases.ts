import { Request, Response } from 'express';
import getPurchases from '../../data/restaurants/getPurchases';

export default async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req;

    const purchases = await getPurchases(restaurantId);

    return res.json(purchases);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
