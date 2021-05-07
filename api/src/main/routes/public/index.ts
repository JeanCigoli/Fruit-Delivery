import { Router } from 'express';

export default (routes: Router) => {
  routes.get('/', (_, res) => {
    return res.json({
      message: 'API - fruit delivery',
      status: 'active',
    });
  });
};
