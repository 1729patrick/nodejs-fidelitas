import { Request, Response } from "express";

import getProductByType from "../../data/products/getProductByType";


export default async (
  req: Request,
  res: Response
) => {
  try {
    const { restaurantId } = req;
    const { productType } = req.body;

    const product = await getProductByType(parseInt(String(restaurantId)), productType);
    return res.json(product);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
