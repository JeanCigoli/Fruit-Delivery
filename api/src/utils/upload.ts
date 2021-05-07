import crypto from 'crypto';
import { resolve, extname } from 'path';
import { Request } from 'express';

export interface Image {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

const extensions = ['.jpg', '.jpeg', '.png'];

export function megaBytesToBytes(value: number) {
  return 2 ** 20 * value;
}

export function fileFilter(_: Request, file: Image, cb: Function) {
  if (!extensions.includes(extname(file.originalname).toLocaleLowerCase())) {
    return cb(new Error('FORMAT_NOT_ALLOWED'));
  }

  return cb(null, true);
}

export function handleFileName(_: Request, file: Image, cb: Function) {
  crypto.randomBytes(16, (error, res) => {
    if (error)
      return cb(
        error,
        res.toString('hex') + extname(file.originalname).toLocaleLowerCase(),
      );

    return cb(
      null,
      res.toString('hex') + extname(file.originalname).toLocaleLowerCase(),
    );
  });
}

export function getOriginalNameFromFileObject({ originalname }: Image) {
  return originalname;
}

export const uploadsPath = resolve(__dirname, '..', '..', 'uploads');
