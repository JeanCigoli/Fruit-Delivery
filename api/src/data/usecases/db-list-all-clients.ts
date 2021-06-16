import { ListAllClients } from '../../domain/usecases/list-all-clients';

import {
  ListAllClientsRepository,
  CountAllClientsRepository,
} from '../protocols/db';

export class DbListAllClients implements ListAllClients {
  constructor(
    private readonly clientsRepository: ListAllClientsRepository,
    private readonly countClientsRepository: CountAllClientsRepository,
  ) {}

  async list(params: ListAllClients.Params): ListAllClients.Result {
    const { limit, page } = params;
    const offset = page === 0 ? 0 : page * limit;

    const clients = await this.clientsRepository.findAll({
      limit,
      offset,
    });

    const [quantity] = await this.countClientsRepository.countAll();

    return {
      data: clients,
      total: quantity.total,
      currentPage: page,
      limitPage: Math.ceil(quantity.total / limit) - 1,
    };
  }
}
