import { Request, Response } from "express";
import getRestaurantUsers from "../../data/user/getRestaurantUsers";

export default async (req: Request, res: Response) => {
  try {
      const {restaurantId} = req.query;

      if(typeof restaurantId === 'string') {
        const userRestaurants = await getRestaurantUsers(parseInt(restaurantId));

        return res.json(userRestaurants);
      }
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
