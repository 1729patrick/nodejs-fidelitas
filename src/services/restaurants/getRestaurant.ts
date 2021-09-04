import { Request, Response } from "express";
import { GetRestaurantParams } from "../../../types/requests/restaurant/getRestaurant";
import getRestaurant from "../../data/restaurants/getRestaurant";

export default async (
  req: Request<any, GetRestaurantParams>,
  res: Response
) => {
  try {
    const { restaurantId } = req.params;

    const restaurant = await getRestaurant(restaurantId);
    return res.json(restaurant);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
