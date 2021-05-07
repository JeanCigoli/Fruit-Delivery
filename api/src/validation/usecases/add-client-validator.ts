import * as yup from 'yup';
import { string, document, phone, address } from '..';

const clientSchema = yup.object().shape({
  name: string('O nome').required('O nome é obrigatório'),
  document,
  phone,
  address: yup.object().shape(address),
});

export { clientSchema };
