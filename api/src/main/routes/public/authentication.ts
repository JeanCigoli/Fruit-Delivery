import { Router } from 'express';
import { authenticationSchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import { makeAuthentication } from '../../factories/controller';

export default (routes: Router) => {
  routes.post(
    '/authentication',
    adaptMiddlewareValidator(authenticationSchema),
    adaptRoute(makeAuthentication()),
  );
};
