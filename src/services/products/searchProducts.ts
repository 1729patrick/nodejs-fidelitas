import { Request, Response } from 'express';
import searchProducts from '../../data/products/searchProducts';

export default async (
  req: Request<any, any, any, { term: string }>,
  res: Response,
) => {
  try {
    const { term } = req.query;

    const { restaurantId } = req;

    const products = await searchProducts(restaurantId, term);

    return res.json(products);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
