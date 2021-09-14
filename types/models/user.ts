export type UserType = "client" | "admin";

export type UserStatus =
  | "ACTIVE"
  | "DELETED";


export type User = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  type: UserType;
  phone: string;
  email: string;
  status: UserStatus;
  restaurantId: number;
  createdAt: string;
  updatedAt: string;
};
