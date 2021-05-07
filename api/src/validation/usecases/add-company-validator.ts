import * as yup from 'yup';
import { string, document, password, address } from '..';

const addCompanySchema = yup.object().shape({
  name: string('O nome').required('O nome é obrigatório'),
  document,
  login: string('O login').required('O login é obrigatório'),
  password,
  address: yup.object().shape(address),
});

export { addCompanySchema };
