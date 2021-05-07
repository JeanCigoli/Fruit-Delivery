import { ClientRepository } from '../../../infra/db/mysql/client-repository';
import { AddressRepository } from '../../../infra/db/mysql/address-repository';
import { RelClientAddressRepository } from '../../../infra/db/mysql/rel-client-address-repository';
import { DbAddClient } from '../../../data/usecases/db-add-client';
import { AddClientController } from '../../../presentation/controllers/add-client-controller';

export function makeAddClient() {
  const clientRepository = new ClientRepository();
  const addressRepository = new AddressRepository();
  const relClientAddressRepository = new RelClientAddressRepository();
  const dbAddClient = new DbAddClient(
    clientRepository,
    clientRepository,
    addressRepository,
    relClientAddressRepository,
  );
  return new AddClientController(dbAddClient);
}
