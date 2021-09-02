import database, { Purchases } from "../../database";
import { Purchase } from "../../../types/models/purchase";
import localFile from "../../helpers/localFile";
import { Product } from "../../../types/models/product";

export default async (userId: number): Promise<Purchase[]> => {
  const purchases = await Purchases()
    .select(
      "purchases.*",
      database.raw(`ROW_TO_JSON(addresses) AS address`),
      database.raw(`ROW_TO_JSON(payments) AS payment`),
      database.raw(
        `JSON_AGG(
          DISTINCT JSONB_BUILD_OBJECT(
            'id', products.id,
            'title', products.title,
            'description', products.description,
            'ingredients', products.ingredients,
            'allergens', products.allergens,
            'price', products.price,
            'type', products.type,
            'image', files.*
          )
        ) as products`
      )
    )
    .where("purchases.userId", userId)
    .leftJoin("purchaseProducts", "purchaseProducts.purchaseId", "purchases.id")
    .leftJoin("products", "purchaseProducts.productId", "products.id")
    .leftJoin("files", "files.id", "products.imageId")
    .leftJoin("addresses", "addresses.id", "purchases.addressId")
    .leftJoin("payments", "payments.id", "purchases.paymentId")
    .groupBy("purchases.id", "addresses.id", "payments.id");

  return purchases.map((purchase) => {
    return {
      ...purchase,
      products: purchase.products.map((product: Product) => {
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
      }),
    };
  });
};
