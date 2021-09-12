import { Storage } from "@google-cloud/storage";
import { Request, Response } from "express";
import crypto from "crypto";
import localFile from "../../helpers/localFile";
import createFile from "../../data/files/createFile";
import { UploadFileBody } from "../../../types/requests/files/uploadFile";

export default async (
  req: Request<any, any, UploadFileBody>,
  res: Response
) => {
  try {
    const buckets = {
      product: process.env.PRODUCTS_BUCKET,
      profile: process.env.PROFILES_BUCKET,
      general: process.env.GENERAL_BUCKET,
    };

    const { path, originalname: originalName } = req.file as {
      originalname: string;
      path: string;
    };

    const [ext] = originalName.split(".").reverse();

    const storage = new Storage();

    const fileName = `${crypto.randomBytes(16).toString("hex")}.${ext}`;
    const bucketName = buckets[req.body.type] as string;


    await storage.bucket(bucketName).upload(path, {
      destination: fileName,
    });

    const file = await createFile(originalName, bucketName, fileName);
    return res.json({
      fileName,
      bucketName,
      url: localFile(bucketName, fileName),
      id: file
    });
  } catch (err: any) {
    return res.boom.badRequest(err.message);
  }
};
