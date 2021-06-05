import { TOKEN } from '../main/config/constants';
import { SessionStorage } from './storage/session';

export function getToken() {
  const token = SessionStorage.getItem(TOKEN);

  return token;
}

export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);

  return date.toLocaleString('pt-BR');
};

export const formatCash = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatCnpj = (cnpj: string) => {
  const formatting = cnpj.replace('/', '%2F');

  return formatting;
};

export const transformObjectToQueryParams = (object: any) =>
  Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
