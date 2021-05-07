import * as yup from 'yup';
import { string, document, phone, address, number } from '..';

const updateClientSchema = yup.object().shape({
  id: number('O id').required('O id é obrigatório'),
  name: string('O nome').required('O nome é obrigatório'),
  document,
  phone,
  address: yup.object().shape(address),
});

export { updateClientSchema };
