import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import getProducts from '../services/products/getProducts';
import searchProducts from '../services/products/searchProducts';

const router = Router();

router.route('/').get(getProducts);
router.route('/search').get(
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      term: Joi.string().required(),
    }),
  }),
  searchProducts,
);

export default router;
