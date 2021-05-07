import { DbUpdateClient } from '../../../data/usecases/db-update-client';
import { AddressRepository } from '../../../infra/db/mysql/address-repository';
import { ClientRepository } from '../../../infra/db/mysql/client-repository';
import { UpdateClientController } from '../../../presentation/controllers/update-client-controller';

export function makeUpdateClient() {
  const clientRepository = new ClientRepository();
  const addressRepository = new AddressRepository();
  const dbUpdateClient = new DbUpdateClient(
    clientRepository,
    clientRepository,
    addressRepository,
  );
  return new UpdateClientController(dbUpdateClient);
}
