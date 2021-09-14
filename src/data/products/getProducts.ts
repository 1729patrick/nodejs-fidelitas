import database, { Products } from "../../database";
import { Product } from "../../../types/models/product";
import localFile from "../../helpers/localFile";

export default async (restaurantId: number): Promise<Product[]> => {
  const products = await Products()
    .select("products.*", database.raw(`ROW_TO_JSON(files) AS image`))
    .where("products.restaurantId", restaurantId)
    .where("products.status", "ACTIVE")
    .leftJoin("files", "files.id", "products.imageId");

  return products.map((product) => {
    if (product.image) {
      const { image } = product;

      return {
        ...product,
        image: {
          id: image.id,
          url: localFile(image.bucketName, image.fileName),
        },
      };
    }

    return product;
  });
};
