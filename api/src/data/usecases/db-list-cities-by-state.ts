import { ListCitiesByState } from '../../domain/usecases/list-cities-by-state';
import { toInt } from '../../utils';
import { ListCitiesByStateRepository } from '../protocols/db';
import { ListStatesByIdRepository } from '../protocols/db';

export class DbListCitiesByState implements ListCitiesByState {
  constructor(
    private readonly stateByIdRepository: ListStatesByIdRepository,
    private readonly citiesByStateRepository: ListCitiesByStateRepository,
  ) {}

  async list(
    id: ListCitiesByState.Params,
  ): Promise<ListCitiesByState.Result[]> {
    const state = await this.stateByIdRepository.findById(toInt(id));

    if (!state) {
      throw new Error('STATE_NOT_FOUND');
    }

    const cities = await this.citiesByStateRepository.findByStateId(state.id);

    return cities;
  }
}
