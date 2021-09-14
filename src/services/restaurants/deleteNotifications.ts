import { Request, Response } from "express";

import deleteNotifications from "../../data/restaurants/deleteNotifications";

export default async (
  req: Request,
  res: Response
) => {
  try {
    const { notificationId } = req.params;

    const user = await deleteNotifications(parseInt(String(notificationId)));
    return res.json(user);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
