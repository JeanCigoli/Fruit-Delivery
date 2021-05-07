import {
  AddAddressRepository,
  UpdateAddressRepository,
} from '../../../data/protocols/db';
import knex from './helpers/connection';

export class AddressRepository
  implements AddAddressRepository, UpdateAddressRepository {
  create(params: AddAddressRepository.Params): AddAddressRepository.Result {
    return knex('tb_address').insert({
      zipcode: params.zipCode,
      street: params.street,
      neighborhood: params.neighborhood,
      number: params.number,
      complement: params.complement,
      id_city: params.city,
    });
  }

  update(
    params: UpdateAddressRepository.Params,
    id: number,
  ): UpdateAddressRepository.Result {
    return knex('tb_address')
      .update({
        zipcode: params.zipCode,
        street: params.street,
        neighborhood: params.neighborhood,
        number: params.number,
        complement: params.complement,
        id_city: params.city,
        updated_at: new Date(),
      })
      .where('id_address', id);
  }
}
