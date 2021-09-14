import { Request, Response } from "express";

import deleteRestaurantUser from "../../data/restaurants/deleteRestaurantUser";

export default async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = req.params;

    const user = await deleteRestaurantUser(parseInt(String(userId)));
    return res.json(user);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
