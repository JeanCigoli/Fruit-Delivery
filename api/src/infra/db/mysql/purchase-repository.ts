import { AddPurchaseRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class PurchaseRepository implements AddPurchaseRepository {
  create(params: AddPurchaseRepository.Params): AddPurchaseRepository.Result {
    return knex('tb_purchase').insert({
      name: params.name,
      value: params.value,
      freight_value: params.freightValue,
      id_company: params.companyId,
      id_payment_type: params.paymentType,
    });
  }
}
