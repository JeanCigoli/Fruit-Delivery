import {
  AddClientRepository,
  ListAllClientsRepository,
  ListClientByDocumentRepository,
  ListClientByIdRepository,
  UpdateClientRepository,
} from '../../../data/protocols/db';
import knex from './helpers/connection';

export class ClientRepository
  implements
    AddClientRepository,
    UpdateClientRepository,
    ListClientByDocumentRepository,
    ListClientByIdRepository,
    ListAllClientsRepository {
  create(params: AddClientRepository.Params): AddClientRepository.Result {
    return knex('tb_client').insert(params);
  }

  update(
    params: UpdateClientRepository.Params,
    id: number,
  ): UpdateClientRepository.Result {
    return knex('tb_client')
      .update({
        ...params,
        updated_at: new Date(),
      })
      .where('id_client', id);
  }

  findAll(): ListAllClientsRepository.Result {
    return knex('tb_client').select(
      'id_client as id',
      'name',
      'document',
      'phone',
      'created_at as createdAt',
    );
  }

  findByDocument(document: string): ListClientByDocumentRepository.Result {
    return knex('tb_client')
      .select('id_client as id', 'name', 'document')
      .where('document', document)
      .first();
  }

  findById(id: number): ListClientByIdRepository.Result {
    return knex('tb_client as client')
      .select(
        'client.id_client as id',
        'client.name',
        'client.document',
        'client.phone',
        'client.created_at as createdAt',
        'address.id_address as id',
        'address.street',
        'address.neighborhood',
        'address.zipcode as zipCode',
        'address.number',
        'address.complement',
        'address.id_city as city',
      )
      .innerJoin(
        'tb_rel_client_address as rel',
        'rel.id_client',
        'client.id_client',
      )
      .innerJoin(
        'tb_address as address',
        'rel.id_address',
        'address.id_address',
      )
      .where('client.id_client', id)
      .options({ nestTables: true })
      .first();
  }
}
