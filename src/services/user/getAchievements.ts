import { Request, Response } from 'express';
import getInvitations from '../../data/invitations/getInvitations';

export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;

    const invitations = await getInvitations(userId);

    return res.json({ invitations });
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
