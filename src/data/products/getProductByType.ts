
import { Product } from "../../../types/models/product";
import { Products } from "../../database";

export default async (restaurantId: number, productType: string
): Promise<Product[]> => {
  const [product] = await Products()
    .select('products.*')
    .where('products.restaurantId', restaurantId)
    .where('products.type', productType)

  return product;
};
