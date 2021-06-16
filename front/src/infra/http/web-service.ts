import axios from 'axios';
import { getToken, transformObjectToQueryParams } from '../../utils';

const api = axios.create({
  baseURL: 'http://localhost:3355/api',
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    // eslint-disable-next-line no-param-reassign
    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const auth = {
  authentication: (params: any) => api.post('v1/authentication', params),
};

export const product = {
  listAll: (params: any) =>
    api.get(`v1/products?${transformObjectToQueryParams(params)}`),
};

export const clients = {
  listAll: (params: any) =>
    api.get(`v1/clients?${transformObjectToQueryParams(params)}`),
};
