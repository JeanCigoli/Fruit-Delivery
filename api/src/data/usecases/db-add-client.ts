import { AddClient } from '../../domain/usecases/add-client';
import {
  ListClientByDocumentRepository,
  AddClientRepository,
  AddAddressRepository,
  AddRelClientToAddressRepository,
} from '../protocols/db';

export class DbAddClient implements AddClient {
  constructor(
    private readonly clientByDocumentRepository: ListClientByDocumentRepository,
    private readonly addClientRepository: AddClientRepository,
    private readonly addAddressRepository: AddAddressRepository,
    private readonly addRelClientToAddressRepository: AddRelClientToAddressRepository,
  ) {}

  async add(params: AddClient.Params): Promise<AddClient.Result> {
    const clientExist = await this.clientByDocumentRepository.findByDocument(
      params.document,
    );

    if (clientExist) {
      throw new Error('CLIENT_EXIST');
    }

    const [addressId] = await this.addAddressRepository.create(params.address);

    const [clientId] = await this.addClientRepository.create({
      document: params.document,
      name: params.name,
      phone: params.phone,
    });

    await this.addRelClientToAddressRepository.createRelationship(
      clientId,
      addressId,
    );

    return {
      id: clientId,
      ...params,
      address: {
        id: addressId,
        ...params.address,
      },
    };
  }
}
