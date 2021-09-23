import { Request, Response } from 'express';

export default async (req: Request<{ code: string }>, res: Response) => {
  try {
    const { code } = req.params;

    console.log(`${process.env.APP_DEEP_LINK}/referral/${code}`);
    return res.redirect(`${process.env.APP_DEEP_LINK}/referral/${code}`);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
