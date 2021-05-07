import * as yup from 'yup';
import { string, number, quantity, freightValue } from '..';

const addPurchaseSchema = yup.object().shape({
  name: string('O nome da venda').required('O nome da venda é obrigatório'),
  paymentType: number('O tipo de pagamento').required(
    'O tipo de pagamento é obrigatório',
  ),
  freightValue,
  products: yup
    .array()
    .of(
      yup.object().shape({
        id: number('O id do produto').required('O id do produto é obrigatório'),
        quantity: quantity,
      }),
    )
    .required('É necessário pelo menos um produto na venda'),
});

export { addPurchaseSchema };
