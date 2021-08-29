declare namespace Express {
  interface Request {
    restaurantId: number;
    userId: number;
    userType: "admin" | "client";
  }
}
