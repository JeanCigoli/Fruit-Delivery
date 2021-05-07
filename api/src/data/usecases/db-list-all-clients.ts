import { ListAllClients } from '../../domain/usecases/list-all-clients';
import { ListAllClientsRepository } from '../protocols/db/clients/list-all-clients';

export class DbListAllClients implements ListAllClients {
  constructor(private readonly clientsRepository: ListAllClientsRepository) {}

  async list(): ListAllClients.Result {
    const clients = await this.clientsRepository.findAll();

    return clients;
  }
}
