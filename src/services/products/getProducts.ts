import { Request, Response } from "express";
import getProducts from "../../data/products/getProducts";

export default async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req;

    const products = await getProducts(restaurantId);

    return res.json(products);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
