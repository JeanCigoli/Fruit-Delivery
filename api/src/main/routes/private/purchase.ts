import { Router } from 'express';
import { addPurchaseSchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import { makeAddPurchase } from '../../factories/controller';

export default (routes: Router) => {
  routes.post(
    '/purchases',
    adaptMiddlewareValidator(addPurchaseSchema),
    adaptRoute(makeAddPurchase()),
  );
};
