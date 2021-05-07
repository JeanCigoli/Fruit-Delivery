import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { SERVER } from '../../utils/constants';
import path from 'path';

export default (app: Express, route: 'private' | 'public'): void => {
  const router = Router();
  app.use(SERVER.BASE_URI, router);

  const routesFolderPath = path.resolve(__dirname, '..', 'routes', route);

  readdirSync(routesFolderPath).map(async (file) => {
    if (!file.includes('.spec.') && !file.endsWith('.map')) {
      (await import(`${routesFolderPath}/${file}`)).default(router);
    }
  });
};
