import { ListStatesByIdRepository } from '../../../data/protocols/db';
import { ListStatesRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class StateRepository
  implements ListStatesRepository, ListStatesByIdRepository {
  findAll(): ListStatesRepository.Result {
    return knex('tb_state')
      .select('id_state as id', 'name', 'uf')
      .orderBy('name', 'asc');
  }

  findById(id: number): ListStatesByIdRepository.Result {
    return knex('tb_state')
      .select('id_state as id', 'name', 'uf')
      .where('id_state', id)
      .first();
  }
}
