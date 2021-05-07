import { Router } from 'express';
import { idSchema } from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import {
  makeListStates,
  makeListCitiesByState,
} from '../../factories/controller';

export default (routes: Router) => {
  routes.get('/states', adaptRoute(makeListStates()));
  routes.get(
    '/states/:id/cities',
    adaptMiddlewareValidator(idSchema),
    adaptRoute(makeListCitiesByState()),
  );
};
