import { Request, Response } from "express";

import deleteRestaurantProduct from "../../data/products/deleteRestaurantProduct";

export default async (
  req: Request,
  res: Response
) => {
  try {
    const { productId } = req.params;
    const { restaurantId } = req;

    const product = await deleteRestaurantProduct(parseInt(String(productId)), restaurantId);
    return res.json(product);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
