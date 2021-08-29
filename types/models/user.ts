export type UserType = "client" | "admin";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  type: UserType;
  phone: string;
  email: string;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
