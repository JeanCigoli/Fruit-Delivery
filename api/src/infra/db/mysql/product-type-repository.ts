import {
  AddTypeProductRepository,
  ListAllTypeProductRepository,
  ListTypeProductByTypeRepository,
} from '../../../data/protocols/db';
import knex from './helpers/connection';

export class ProductTypeRepository
  implements
    ListTypeProductByTypeRepository,
    AddTypeProductRepository,
    ListAllTypeProductRepository {
  create(
    type: AddTypeProductRepository.Params,
  ): AddTypeProductRepository.Result {
    return knex('tb_product_type').insert(type);
  }

  findAll(): ListAllTypeProductRepository.Result {
    return knex('tb_product_type').select(
      'id_product_type as id',
      'type',
      'created_at as createdAt',
    );
  }

  findByType(type: string): ListTypeProductByTypeRepository.Result {
    return knex('tb_product_type')
      .select('id_product_type as id', 'type')
      .where('type', type)
      .first();
  }
}
