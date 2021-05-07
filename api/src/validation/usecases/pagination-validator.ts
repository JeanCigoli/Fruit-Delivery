import * as yup from 'yup';
import { number } from '..';

const paginationSchema = yup.object().shape({
  page: number('A página').required('A página é obrigatória'),
  limit: number('O limite'),
});

export { paginationSchema };
