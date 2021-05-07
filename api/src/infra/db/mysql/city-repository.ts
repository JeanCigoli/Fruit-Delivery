import knex from './helpers/connection';
import { ListCitiesByStateRepository } from '../../../data/protocols/db';

export class CityRepository implements ListCitiesByStateRepository {
  findByStateId(id: number): ListCitiesByStateRepository.Result {
    return knex('tb_city')
      .select('id_city as id', 'name')
      .where('id_state', id)
      .orderBy('name', 'asc');
  }
}
