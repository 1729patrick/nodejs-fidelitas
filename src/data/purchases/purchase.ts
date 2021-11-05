import { Purchase} from "../../../types/models/purchase";
import {Purchases} from "../../database";

type PurchaseBody = {
  deliveryType: "delivery" | "local" | "takeAway";
  promotionCode?: string;
  subTotal: number;
  discount: number;
  total: number;
  paymentId?: number;
  addressId: number;
}

export default async (userId: number, restaurantId: number, purchaseBody: PurchaseBody): Promise<Purchase> => {
  const [purchase] = await Purchases().insert({ userId, restaurantId, ...purchaseBody}).returning('*');
  return purchase;
}
