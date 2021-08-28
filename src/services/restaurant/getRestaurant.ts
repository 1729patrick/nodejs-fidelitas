import { Request, Response } from "express";
import getRestaurant from "../../data/restaurant/getRestaurant";
import { GetRestaurantParams } from "../../types/requests/restaurant/getRestaurant";

export default async (
  req: Request<GetRestaurantParams, any, any>,
  res: Response
) => {
  try {
    const { restaurantId } = req.params;

    const restaurant = await getRestaurant(restaurantId);
    return res.json(restaurant);
  } catch (err) {
    return res.boom.badRequest(err.message);
  }
};
