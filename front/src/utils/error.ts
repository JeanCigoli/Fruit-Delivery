import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { DEFAULT_REQUEST_ERROR_MESSAGE } from '../main/config/constants';

export const requestError = (error: AxiosError) => {
  const { response } = error;

  if (!response) {
    toast.error(DEFAULT_REQUEST_ERROR_MESSAGE);
    return;
  }

  response.data.error.forEach((element: any) => {
    toast.error(element.message);
  });
};
