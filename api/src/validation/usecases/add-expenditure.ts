import * as yup from 'yup';
import { string, number, value } from '..';

const addExpenditureSchema = yup.object().shape({
  name: string('A descrição').required('A descrição é obrigatória'),
  value,
  expenditureType: number('O tipo de despesa').required(
    'O tipo de despesa é obrigatório',
  ),
});

export { addExpenditureSchema };
