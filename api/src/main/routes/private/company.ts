import { Router } from 'express';
import { addCompanySchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import { makeAddCompany } from '../../factories/controller';

export default (routes: Router) => {
  routes.post(
    '/companies',
    adaptMiddlewareValidator(addCompanySchema),
    adaptRoute(makeAddCompany()),
  );
};
