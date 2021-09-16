import { Request, Response } from "express";

import getRestaurantFacilities from "../../data/restaurants/getRestaurantFacilities";

export default async (
  req: Request,
  res: Response
) => {
  try {
    const { restaurantId } = req;
    const notifications = await getRestaurantFacilities(parseInt(String(restaurantId)));
    return res.json(notifications);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
