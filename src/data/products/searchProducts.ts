import database, { Products } from '../../database';
import { Product } from '../../../types/models/product';
import localFile from '../../helpers/localFile';

export default async (
  restaurantId: number,
  term: string,
): Promise<Product[]> => {
  term = `%${term.toLocaleLowerCase()}%`;

  const products = await Products()
    .select('products.*', database.raw(`ROW_TO_JSON(files) AS image`))
    .where('products.restaurantId', restaurantId)
    .where(function () {
      this.orWhere(database.raw('LOWER(products.title) LIKE ?', [term]))
        .orWhere(database.raw('LOWER(products.description) LIKE ?', [term]))
        .orWhere(database.raw('LOWER(products.ingredients) LIKE ?', [term]))
        .orWhere(database.raw('LOWER(products.allergens) LIKE ?', [term]));
    })
    .leftJoin('files', 'files.id', 'products.imageId');

  return products.map(product => {
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
