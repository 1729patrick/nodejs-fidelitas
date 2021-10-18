import { Request, Response } from 'express';
import getInvitations from '../../data/invitations/getInvitations';
import getReviews from '../../data/reviews/getReviews';
import getPurchases from '../../data/purchases/getPurchases';

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const invitations = await getInvitations(userId);
    const reviews = await getReviews(userId);
    const purchases = await getPurchases(userId);

    return res.json({ invitations, reviews, purchases });
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
