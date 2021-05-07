import { Router } from 'express';
import { addSaleSchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import { makeAddSale } from '../../factories/controller';

export default (routes: Router) => {
  routes.post(
    '/sales',
    adaptMiddlewareValidator(addSaleSchema),
    adaptRoute(makeAddSale()),
  );
};
