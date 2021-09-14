
import { Product } from "../../../types/models/product";
import { Products } from "../../database";

export default async (id: number, restaurantId: number
): Promise<Product[]> => {
  const product = await Products()
    .select('products.*')
    .select('purchases.*')
    .where('products.id', id)
    .where('products.restaurantId', restaurantId)
    .update({status: 'DELETED'})
    .returning('*')

  return product;
};
