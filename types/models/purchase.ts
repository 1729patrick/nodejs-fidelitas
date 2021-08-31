export type Purchase = {
  id: number;
  deliveryType: "delivery" | "local" | "takeAway";
  promotionCode?: string;
  subTotal: number;
  discount: number;
  total: number;
  paymentId: number;
  addressId: number;
  userId: number;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
