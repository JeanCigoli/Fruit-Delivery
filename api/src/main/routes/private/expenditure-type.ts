import { Router } from 'express';
import { typesSchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import {
  makeAddExpenditureType,
  makeListAllExpendituresTypes,
} from '../../factories/controller';

export default (routes: Router) => {
  routes.get('/expenditures/types', adaptRoute(makeListAllExpendituresTypes()));

  routes.post(
    '/expenditures/types',
    adaptMiddlewareValidator(typesSchema),
    adaptRoute(makeAddExpenditureType()),
  );
};
