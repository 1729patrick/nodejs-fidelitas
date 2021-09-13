import { Request, Response } from "express";
import getRestaurant from "../../data/restaurants/getRestaurant";
import addProduct from "../../data/products/addProduct";

export default async (req: Request, res: Response) => {
  try {
    const {  title,
      description,
      ingredients,
      allergens,
      price,
      type,
      imageId,
       } = req.body;
    const {restaurantId} = req;

    const product = await addProduct(title, description, ingredients, allergens, price, type, parseInt(imageId), parseInt(String(restaurantId)));

    return res.json(product);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
