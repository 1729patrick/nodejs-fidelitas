import { Request, Response } from 'express';
import getPayments from '../../data/user/getPayments';

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const addresses = await getPayments(userId);

    return res.json(addresses);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
