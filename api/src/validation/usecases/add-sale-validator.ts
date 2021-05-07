import * as yup from 'yup';
import { number, quantity, freightValue } from '..';

const addSaleSchema = yup.object().shape({
  clientId: number('O id do cliente').required('O id do cliente é obrigatório'),
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

export { addSaleSchema };
