import { StateRepository } from '../../../infra/db/mysql/state-repository';
import { CityRepository } from '../../../infra/db/mysql/city-repository';
import { DbListCitiesByState } from '../../../data/usecases/db-list-cities-by-state';
import { ListCitiesByStateController } from '../../../presentation/controllers/list-cities-by-state-controller';

export function makeListCitiesByState() {
  const stateRepository = new StateRepository();
  const cityRepository = new CityRepository();
  const dbListStates = new DbListCitiesByState(stateRepository, cityRepository);
  return new ListCitiesByStateController(dbListStates);
}
