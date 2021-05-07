import { ListClientById } from '../../domain/usecases/list-client-by-id';
import { toInt } from '../../utils';
import { ListClientByIdRepository } from '../protocols/db';

export class DbListClientById implements ListClientById {
  constructor(
    private readonly clientByIdRepository: ListClientByIdRepository,
  ) {}

  async list(id: string): ListClientById.Result {
    const result = await this.clientByIdRepository.findById(toInt(id));

    if (!result) {
      throw new Error('CLIENT_NOT_FOUND');
    }

    return {
      ...result.client,
      address: result.address,
    };
  }
}
