import database, { Products } from '../../database';
import { Product, ProductType } from '../../../types/models/product';
import {Joi} from "celebrate";

export default async (
  title: string,
  description: string,
  ingredients: string,
  allergens: string,
  price: number,
  type: ProductType,
  imageId: number,
  restaurantId: number
): Promise<Product[]> => {


  return Products()
    .insert({title:title,
      description:description,
      ingredients: ingredients,
      allergens:allergens,
      price:price,
      type:type,
      // @ts-ignore
      imageId:imageId,
      restaurantId:restaurantId})
    .returning('*');

}
