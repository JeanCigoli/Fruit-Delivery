import * as yup from 'yup';
import { string, password } from '..';

const authenticationSchema = yup.object().shape({
  login: string('O login').required('O login é obrigatório'),
  password,
});

export { authenticationSchema };
