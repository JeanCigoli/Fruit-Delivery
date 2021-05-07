import * as yup from 'yup';
import { number } from '..';

const idSchema = yup.object().shape({
  id: number('O id'),
});

export { idSchema };
