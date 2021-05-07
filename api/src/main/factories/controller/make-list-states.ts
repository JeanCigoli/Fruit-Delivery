import { StateRepository } from '../../../infra/db/mysql/state-repository';
import { DbListStates } from '../../../data/usecases/db-list-states';
import { ListStatesController } from '../../../presentation/controllers/list-states-controller';

export function makeListStates() {
  const stateRepository = new StateRepository();
  const dbListStates = new DbListStates(stateRepository);
  return new ListStatesController(dbListStates);
}
