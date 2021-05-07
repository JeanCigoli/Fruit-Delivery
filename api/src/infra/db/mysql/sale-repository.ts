import { AddSaleRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class SaleRepository implements AddSaleRepository {
  create(params: AddSaleRepository.Params): AddSaleRepository.Result {
    return knex('tb_sale').insert({
      value: params.value,
      freight_value: params.freightValue,
      id_client: params.clientId,
      id_payment_type: params.paymentType,
    });
  }
}
