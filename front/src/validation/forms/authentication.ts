import * as yup from 'yup';
import { string, password } from '..';

const authenticationSchema = yup.object().shape({
  login: string('O usuário').required('O usuário é obrigatório'),
  password,
});

export { authenticationSchema };
