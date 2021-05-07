import { Router } from 'express';
import {
  idSchema,
  addProductSchema,
  updateProductSchema,
  paginationSchema,
} from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import {
  makeAddProduct,
  makeListAllProducts,
  makeListProductById,
  makeUpdateProduct,
} from '../../factories/controller';
import { single, upload } from '../../middleware/upload';

export default (routes: Router) => {
  routes.post(
    '/products',
    upload(single('image')),
    adaptMiddlewareValidator(addProductSchema),
    adaptRoute(makeAddProduct()),
  );

  routes.get(
    '/products',
    adaptMiddlewareValidator(paginationSchema),
    adaptRoute(makeListAllProducts()),
  );

  routes.get(
    '/products/:id',
    adaptMiddlewareValidator(idSchema),
    adaptRoute(makeListProductById()),
  );

  routes.put(
    '/products/:id',
    upload(single('image')),
    adaptMiddlewareValidator(updateProductSchema),
    adaptRoute(makeUpdateProduct()),
  );
};
