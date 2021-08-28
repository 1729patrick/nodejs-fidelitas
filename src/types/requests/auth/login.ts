import { UserType } from "../../models/user";

export type LoginBody = {
  email: string;
  password: string;
  type: UserType;
  restaurantId: number;
};
