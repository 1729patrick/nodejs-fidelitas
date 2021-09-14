import { Request, Response } from "express";

import deleteRestaurantUser from "../../data/restaurants/deleteRestaurantUser";

export default async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = req.params;

    const notifications = await deleteRestaurantUser(parseInt(String(userId)));
    return res.json(notifications);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
