import { Router } from 'express';
import {
  idSchema,
  clientSchema,
  updateClientSchema,
} from '../../../validation/usecases';
import { adaptRoute } from '../../adapters/adaptRoute';
import { adaptMiddlewareValidator } from '../../adapters/adaptValidator';
import {
  makeAddClient,
  makeListAllClients,
  makeUpdateClient,
  makeListClientById,
} from '../../factories/controller';

export default (routes: Router) => {
  routes.get('/clients', adaptRoute(makeListAllClients()));

  routes.post(
    '/clients',
    adaptMiddlewareValidator(clientSchema),
    adaptRoute(makeAddClient()),
  );

  routes.get(
    '/clients/:id',
    adaptMiddlewareValidator(idSchema),
    adaptRoute(makeListClientById()),
  );

  routes.put(
    '/clients/:id',
    adaptMiddlewareValidator(updateClientSchema),
    adaptRoute(makeUpdateClient()),
  );
};
