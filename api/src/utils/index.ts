import { HttpResponse } from '../presentation/protocols';
import { Response } from 'express';
import { URL_BASE } from './constants';

export function toInt(value: string) {
  return parseInt(value, 10) || 0;
}

export function getFullDate() {
  const date = new Date()
    .toString()
    .replace(/[A-Z]{3}\+/, '+')
    .split(/ /);

  return `${date[2]}-${date[1]}-${date[3]}:${date[4]} ${date[5]}`;
}

export function makeError(param: string, message: string) {
  return [
    {
      message,
      param,
    },
  ];
}

export function makeReturn(res: Response, httpResponse: HttpResponse) {
  return res.status(httpResponse.statusCode).json(httpResponse.body);
}

export function parseJSON(jsonString: string) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error('INVALID_JSON');
  }
}

export function getUrlImage(image: string) {
  return `${URL_BASE.IMAGE}${image}`;
}
