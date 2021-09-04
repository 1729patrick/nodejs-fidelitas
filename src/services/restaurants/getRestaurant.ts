import { Request, Response } from "express";
import getRestaurant from "../../data/restaurants/getRestaurant";

export default async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req;

    const restaurant = await getRestaurant(restaurantId);
    return res.json(restaurant);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
