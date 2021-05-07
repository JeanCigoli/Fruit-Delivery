import { Router } from 'express';
import { typesSchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import {
  makeAddTypeProduct,
  makeListAllProductTypes,
} from '../../factories/controller';

export default (routes: Router) => {
  routes.get('/products/types', adaptRoute(makeListAllProductTypes()));

  routes.post(
    '/products/types',
    adaptMiddlewareValidator(typesSchema),
    adaptRoute(makeAddTypeProduct()),
  );
};
