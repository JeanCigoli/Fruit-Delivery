import { adaptMiddleware } from '../adapters/adaptMiddleware';
import { makeAuthMiddleware } from '../factories/middleware';

export const auth = adaptMiddleware(makeAuthMiddleware());
