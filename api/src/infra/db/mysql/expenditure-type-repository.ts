import {
  AddExpenditureTypeRepository,
  ListExpenditureByTypeRepository,
  ListAllExpenditureTypeRepository,
  ListExpenditureTypeByIdRepository,
} from '../../../data/protocols/db';
import knex from './helpers/connection';

export class ExpenditureTypeRepository
  implements
    AddExpenditureTypeRepository,
    ListExpenditureByTypeRepository,
    ListAllExpenditureTypeRepository,
    ListExpenditureTypeByIdRepository {
  findById(id: number): ListExpenditureTypeByIdRepository.Result {
    return knex('tb_expenditure_type')
      .select('id_expenditure_type as id', 'type')
      .where('id_expenditure_type', id)
      .first();
  }

  findAll(): ListAllExpenditureTypeRepository.Result {
    return knex('tb_expenditure_type').select(
      'id_expenditure_type as id',
      'type',
    );
  }

  findByType(type: string): ListExpenditureByTypeRepository.Result {
    return knex('tb_expenditure_type')
      .select('id_expenditure_type as id', 'type')
      .where('type', type)
      .first();
  }

  create(
    params: AddExpenditureTypeRepository.Params,
  ): AddExpenditureTypeRepository.Result {
    return knex('tb_expenditure_type').insert(params);
  }
}
