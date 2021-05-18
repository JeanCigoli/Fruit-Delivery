import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3355/api',
});

export const auth = {
  authentication: (params: any) => api.post('v1/authentication', params),
};
