import { Request, Response } from "express";
import addNotifications from "../../data/restaurants/addNotifications";



export default async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req;
    const  { title, description, type} = req.body

    const notification = await addNotifications(title, description, type, restaurantId);

    return res.json(notification);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
