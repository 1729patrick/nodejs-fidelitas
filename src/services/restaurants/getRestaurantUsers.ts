import { Request, Response } from "express";
import getRestaurantUsers from "../../data/restaurants/getRestaurantUsers";

export default async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req;

        const userRestaurants = await getRestaurantUsers(restaurantId);

        return res.json(userRestaurants);

  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
