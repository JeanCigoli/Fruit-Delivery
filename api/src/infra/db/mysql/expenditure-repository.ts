import {
  AddExpenditureRepository,
  ListExpenditureByDateRepository,
} from '../../../data/protocols/db';
import knex from './helpers/connection';

export class ExpenditureRepository
  implements AddExpenditureRepository, ListExpenditureByDateRepository {
  findBetweenDate(
    params: ListExpenditureByDateRepository.Params,
  ): ListExpenditureByDateRepository.Result {
    return knex('tb_expenditure as e')
      .innerJoin(
        'tb_expenditure_type as t',
        'e.id_expenditure_type',
        't.id_expenditure_type',
      )
      .select(
        'e.id_expenditure as id',
        'e.name',
        'e.value',
        't.type as expenditureType',
        'e.created_at as createdAt',
      )
      .whereBetween('e.created_at', [params.init, params.final]);
  }

  create(
    params: AddExpenditureRepository.Params,
  ): AddExpenditureRepository.Result {
    return knex('tb_expenditure').insert({
      name: params.name,
      value: params.value,
      id_company: params.companyId,
      id_expenditure_type: params.expenditureType,
    });
  }
}
