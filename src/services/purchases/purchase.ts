import {Request, Response} from "express";
import addPurchase from "../../data/purchases/purchase";

export default async (req: Request, res: Response) => {
  try {
    const {userId,restaurantId} = req;
    const purchase = await addPurchase(userId, restaurantId, req.body);
    return res.json(purchase);
  }catch(err: any){
    return res.boom.badRequest(err.message);
  }
}
