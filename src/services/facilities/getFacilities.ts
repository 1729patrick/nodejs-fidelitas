import { Request, Response } from "express";
import getFacilities from "../../data/facilities/getFacilities";

export default async (req: Request, res: Response) => {
  try {
    const facilities = await getFacilities();
    return res.json(facilities);
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
