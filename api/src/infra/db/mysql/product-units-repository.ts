import { ListAllUnitsProductRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class ProductUnitRepository implements ListAllUnitsProductRepository {
  findAll(): ListAllUnitsProductRepository.Result {
    return knex('tb_product_unit').select(
      'id_product_unit as id',
      'unit',
      'unit_abbreviation as unitAbbreviation',
    );
  }
}
