import { AddRelClientToAddressRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class RelClientAddressRepository
  implements AddRelClientToAddressRepository {
  createRelationship(client: number, address: number): Promise<void> {
    return knex('tb_rel_client_address').insert({
      id_address: address,
      id_client: client,
    });
  }
}
