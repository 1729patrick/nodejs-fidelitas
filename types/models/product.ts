import { File } from "./file";

export type ProductType =
  | "starter"
  | "main"
  | "dessert"
  | "salad"
  | "side"
  | "drink"
  | "special";

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
  image?: File;
};
