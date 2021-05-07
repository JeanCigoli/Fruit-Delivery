import { TOKEN } from '../main/config/constants';

export function getToken() {
  const token = localStorage.getItem(TOKEN);

  return token;
}

export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);

  return date.toLocaleString('pt-BR');
};

export const formatCnpj = (cnpj: string) => {
  const formatting = cnpj.replace('/', '%2F');

  return formatting;
};
