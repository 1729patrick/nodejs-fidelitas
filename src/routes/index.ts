import * as winston from 'winston';
import { Express, Request, Response } from 'express';
import { errors } from 'celebrate';

import authMiddleware from '../middlewares/auth';

import auth from './auth';
import restaurants from './restaurants';
import products from './products';
import files from './files';
import achievements from './achievements';
import addresses from './addresses';
import user from './user';
import purchases from './purchases';
import facilities from './facilities';

export default (app: Express) => {
  winston.log('info', '--> Initialisations des routes');

  app.get('/fidelitas/api', (_: Request, res: Response) =>
    res.status(200).send({
      message: 'server is running',
    }),
  );

  app.use('/fidelitas/auth', [auth]);
  app.use('/fidelitas/files', [files]);
  app.use('/fidelitas/restaurants', [restaurants]);

  app.use(authMiddleware);
  app.use('/fidelitas/products', [products]);
  app.use('/fidelitas/achievements', [achievements]);
  app.use('/fidelitas/addresses', [addresses]);
  app.use('/fidelitas/user', [user]);
  app.use('/fidelitas/purchases', [purchases]);
  app.use('/fidelitas/facilities', [facilities]);

  app.use(errors());
  app.all('*', (_: Request, res: Response) => res.boom.notFound());
};
