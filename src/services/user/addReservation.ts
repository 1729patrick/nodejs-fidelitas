import { Request, Response } from "express";
import addReserve from "../../data/user/addReserve";


export default async (req: Request, res: Response) => {
  try {
    const { userId } = req;
    const  { restaurantId, date, time, adults, kids, babies} = req.body

    const addresses = await addReserve(userId,restaurantId, date, time, adults, kids, babies);

    return res.json(addresses);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
