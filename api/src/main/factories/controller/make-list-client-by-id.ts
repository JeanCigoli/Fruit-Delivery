import { DbListClientById } from '../../../data/usecases/db-list-client-by-id';
import { ClientRepository } from '../../../infra/db/mysql/client-repository';
import { ListClientByIdController } from '../../../presentation/controllers/list-client-by-id-controller';

export function makeListClientById() {
  const clientRepository = new ClientRepository();
  const dbClientById = new DbListClientById(clientRepository);
  return new ListClientByIdController(dbClientById);
}
