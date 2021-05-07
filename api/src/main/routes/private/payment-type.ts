import { Router } from 'express';
import { typesSchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import {
  makeAddPaymentType,
  makeListAllPaymentsTypes,
} from '../../factories/controller';

export default (routes: Router) => {
  routes.get('/payments/types', adaptRoute(makeListAllPaymentsTypes()));

  routes.post(
    '/payments/types',
    adaptMiddlewareValidator(typesSchema),
    adaptRoute(makeAddPaymentType()),
  );
};
