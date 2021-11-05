import {Purchase} from '../../../types/models/purchase';
import { Purchases } from "../../database";

export default async (restaurantId: number): Promise<Purchase[]> => {
  const purchases = await Purchases()
    .select('purchases.*')
    .where("purchases.restaurantId", restaurantId);

  return purchases;
};
