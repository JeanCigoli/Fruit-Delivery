import { ListState } from '../../domain/usecases/list-states';
import { ListStatesRepository } from '../protocols/db';

export class DbListStates implements ListState {
  constructor(private readonly states: ListStatesRepository) {}

  async list(): Promise<ListState.Result[]> {
    const result = await this.states.findAll();

    return result;
  }
}
