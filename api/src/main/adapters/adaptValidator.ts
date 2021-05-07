import { Request, Response, NextFunction } from 'express';
import { YupSchema } from '../../presentation/protocols';
import { formatYupError } from '../../utils/formatters/yupErrorFormatter';
import { badRequest } from '../../utils/response';

export function adaptMiddlewareValidator(schema: YupSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest = {
      ...req.body,
      ...req.params,
      ...req.query,
    };

    try {
      await schema.validate(httpRequest, { abortEarly: false });

      return next();
    } catch (error) {
      const bad = badRequest(formatYupError(error));
      return res.status(bad.statusCode).json(bad.body);
    }
  };
}
