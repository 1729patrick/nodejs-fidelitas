import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import { ErrorType } from "../../types/error";

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: ErrorType.TokenNotProvided });
  }
  const [, token] = authHeader.split(" ");

  try {
    //@ts-ignore
    const decoded = (await promisify(jwt.verify)(
      token,
      //@ts-ignore
      process.env.SECRET
    )) as Request;

    req.userId = decoded.userId;
    req.restaurantId = decoded.restaurantId;
    req.userType = decoded.userType;

    return next();
  } catch (err) {
    return res.status(401).json({ error: ErrorType.InvalidToken });
  }
};
