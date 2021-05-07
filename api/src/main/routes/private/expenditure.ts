import { Router } from 'express';
import {
  addExpenditureSchema,
  expenditureByDateSchema,
} from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import {
  makeAddExpenditure,
  makeListAllExpenditureByDate,
} from '../../factories/controller';

export default (routes: Router) => {
  routes.post(
    '/expenditures',
    adaptMiddlewareValidator(addExpenditureSchema),
    adaptRoute(makeAddExpenditure()),
  );

  routes.get(
    '/expenditures',
    adaptMiddlewareValidator(expenditureByDateSchema),
    adaptRoute(makeListAllExpenditureByDate()),
  );
};
