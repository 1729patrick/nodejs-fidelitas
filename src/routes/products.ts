import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import getProducts from '../services/products/getProducts';
import searchProducts from '../services/products/searchProducts';
import addProduct from "../services/products/addProduct";

const router = Router();

router.route('/').get(getProducts);
router.route('/search').get(
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      term: Joi.string().min(3).required(),
    }),
  }),
  searchProducts,
);
router.route('/add').put(
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      ingredients: Joi.string().required(),
      allergens: Joi.string(),
      price: Joi.number().required(),
      type: Joi.string().required(),
      restaurantId: Joi.number().required(),
      imageId: Joi.number().required()
    }),

  }),
  addProduct,
);

export default router;
