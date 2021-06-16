import { DbListAllClients } from '../../../data/usecases/db-list-all-clients';
import { ClientRepository } from '../../../infra/db/mysql/client-repository';
import { ListAllClientsController } from '../../../presentation/controllers/list-all-clients-controller';

export function makeListAllClients() {
  const clientRepository = new ClientRepository();
  const dbListAllClients = new DbListAllClients(
    clientRepository,
    clientRepository,
  );
  return new ListAllClientsController(dbListAllClients);
}
