import { Request, Response } from "express";

import getNotifications from "../../data/restaurants/getNotifications";

export default async (
  req: Request,
  res: Response
) => {
  try {
    const { restaurantId } = req;
    const notifications = await getNotifications(parseInt(String(restaurantId)));
    return res.json(notifications);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
