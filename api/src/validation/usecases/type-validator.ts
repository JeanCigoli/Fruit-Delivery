import * as yup from 'yup';
import { string } from '..';

const typesSchema = yup.object().shape({
  type: string('O tipo').required('O tipo é obrigatório'),
});

export { typesSchema };
