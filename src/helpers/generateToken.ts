import jwt from "jsonwebtoken";
import { User } from "../../types/models/user";

export default (user: User) =>
  jwt.sign(
    { userId: user.id, restaurantId: user.restaurantId, userType: user.type },
    process.env?.SECRET || "fidelitas",
    {
      expiresIn: process.env.EXPIRE_IN,
    }
  );
