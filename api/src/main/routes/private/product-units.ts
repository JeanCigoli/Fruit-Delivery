import { Router } from 'express';
import { adaptRoute } from '../../adapters/adaptRoute';
import { makeListAllProductUnits } from '../../factories/controller';

export default (routes: Router) => {
  routes.get('/products/units', adaptRoute(makeListAllProductUnits()));
};
