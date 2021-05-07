import multer from 'multer';
import fileUpload from '../config/upload';
import { Response, Request, NextFunction } from 'express';
import { badRequest, serverError } from '../../utils/response';
import { makeError, makeReturn } from '../../utils/';

export function single(param: string) {
  return {
    param,
    callback: fileUpload.single(param),
  };
}

export function upload(uploader: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    return uploader.callback(req, res, (error: Error) => {
      if (!req.file && !req.files && req.method === 'POST') {
        return makeReturn(
          res,
          badRequest(
            makeError(uploader.param, 'A imagem do produto é obrigatória'),
          ),
        );
      }

      if (error instanceof multer.MulterError) {
        return makeReturn(
          res,
          badRequest(
            makeError(
              uploader.param,
              'Ops, parece que ocorreu um erro no upload',
            ),
          ),
        );
      }

      if (error?.message === 'FORMAT_NOT_ALLOWED') {
        return makeReturn(
          res,
          badRequest(
            makeError(
              uploader.param,
              'O arquivo precisa ter a extensão: jpg, jpeg ou png',
            ),
          ),
        );
      }

      if (error) {
        return makeReturn(res, serverError(res));
      }

      return next();
    });
  };
}
