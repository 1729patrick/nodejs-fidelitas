
import { Product } from "../../../types/models/product";
import { Products } from "../../database";

export default async (id: number, restaurantId: number
): Promise<Product[]> => {
  const product = await Products()
    .select('products.*')
    .where('products.id', id)
    .where('products.restaurantId', restaurantId)
    .update({status: 'DELETED'})
    .returning('*')

  return product;
};
