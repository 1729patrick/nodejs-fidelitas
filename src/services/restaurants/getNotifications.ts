import { Request, Response } from "express";
import { GetRestaurantParams } from "../../../types/requests/restaurant/getRestaurant";

import getNotifications from "../../data/restaurants/getNotifications";

export default async (
  req: Request<any, GetRestaurantParams>,
  res: Response
) => {
  try {
    const { restaurantId } = req.params;

    const notifications = await getNotifications(restaurantId);
    return res.json(notifications);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
