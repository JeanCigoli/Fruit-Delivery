import * as yup from 'yup';
import { string, number, value } from '..';

const addProductSchema = yup.object().shape({
  name: string('O nome').required('O nome é obrigatório'),
  valueBuy: value,
  valueSale: value,
  productType: number('O tipo do produto').required(
    'O tipo do produto é obrigatório',
  ),
  productUnit: number('A unidade do produto').required(
    'A unidade do produto é obrigatório',
  ),
});

export { addProductSchema };
