import { UpdateClient } from '../../domain/usecases/update-client';
import { toInt } from '../../utils';
import {
  ListClientByIdRepository,
  UpdateAddressRepository,
  UpdateClientRepository,
} from '../protocols/db';

export class DbUpdateClient implements UpdateClient {
  constructor(
    private readonly clientByIdRepository: ListClientByIdRepository,
    private readonly updateClientRepository: UpdateClientRepository,
    private readonly updateAddressRepository: UpdateAddressRepository,
  ) {}

  async update(params: UpdateClient.Params): Promise<UpdateClient.Result> {
    const result = await this.clientByIdRepository.findById(toInt(params.id));

    if (!result) {
      throw new Error('CLIENT_NOT_FOUND');
    }

    await this.updateClientRepository.update(
      {
        document: params.document,
        name: params.name,
        phone: params.phone,
      },
      result.client.id,
    );

    await this.updateAddressRepository.update(
      params.address,
      result.address.id,
    );

    return {
      ...params,
      id: result.client.id,
    };
  }
}
