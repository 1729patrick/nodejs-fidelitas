import { Products } from "../../database";
import { Product } from "../../../types/models/product";

export default async (id: number): Promise<Product[]> => {
  const products = await Products().where("restaurantId", id);

  return products;
};
