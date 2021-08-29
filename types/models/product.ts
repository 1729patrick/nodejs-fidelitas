type ProductType =
  | "starter"
  | "side"
  | "main"
  | "dessert"
  | "drink"
  | "special"
  | "salad";

export type Product = {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  allergens: string;
  price: number;
  type: ProductType;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
