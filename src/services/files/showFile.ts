import { Storage } from "@google-cloud/storage";
import { Request, Response } from "express";
import { ShowFileParams } from "../../../types/requests/files/showFile";

export default async (
  req: Request<ShowFileParams, any, any>,
  res: Response
) => {
  try {
    const { bucketName, fileName } = req.params;

    const storage = new Storage();

    const [url] = await storage
      .bucket(bucketName)
      .file(fileName)
      .getSignedUrl({
        version: "v4",
        action: "read",
        expires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      });

    return res.redirect(url);
  } catch (err) {
    return res.boom.badRequest(err.message);
  }
};
