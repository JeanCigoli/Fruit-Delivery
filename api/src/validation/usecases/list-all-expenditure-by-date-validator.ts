import * as yup from 'yup';
import { dateFinal, dateInit } from '..';

const expenditureByDateSchema = yup.object().shape({
  init: dateInit,
  final: dateFinal,
});

export { expenditureByDateSchema };
