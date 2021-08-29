import { Files } from "../../database";

export default async (
  originalName: string,
  bucketName: string,
  fileName: string
): Promise<number> => {
  const [fileId] =
    (await Files()
      .insert({ originalName, fileName, bucketName })
      .returning("id")) || [];

  return fileId;
};
