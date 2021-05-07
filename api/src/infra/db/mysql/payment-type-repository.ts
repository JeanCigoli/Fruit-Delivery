import {
  AddPaymentTypeRepository,
  ListAllPaymentTypeRepository,
  ListPaymentByTypeRepository,
} from '../../../data/protocols/db';
import knex from './helpers/connection';

export class PaymentTypeRepository
  implements
    AddPaymentTypeRepository,
    ListPaymentByTypeRepository,
    ListAllPaymentTypeRepository {
  findAll(): ListAllPaymentTypeRepository.Result {
    return knex('tb_payment_type').select(
      'id_payment_type as id',
      'type',
      'created_at as createdAt',
    );
  }

  findByType(type: string): ListPaymentByTypeRepository.Result {
    return knex('tb_payment_type')
      .select('id_payment_type as id', 'type')
      .where('type', type)
      .first();
  }

  create(
    params: AddPaymentTypeRepository.Params,
  ): AddPaymentTypeRepository.Result {
    return knex('tb_payment_type').insert(params);
  }
}
