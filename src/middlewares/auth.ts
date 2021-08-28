import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided." });
  }
  const [, token] = authHeader.split(" ");

  try {
    //@ts-ignore
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET);

    //@ts-ignore
    req.userId = decoded.userId;
    //@ts-ignore
    req.restaurantId = decoded.restaurantId;
    //@ts-ignore
    req.userType = decoded.userType;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid Token." });
  }
};
