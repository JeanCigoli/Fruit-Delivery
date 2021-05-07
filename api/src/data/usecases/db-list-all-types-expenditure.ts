import { ListAllExpenditureType } from '../../domain/usecases/list-all-type-expenditure';
import { ListAllExpenditureTypeRepository } from '../protocols/db';

export class DbListAllExpenditureType implements ListAllExpenditureType {
  constructor(
    private readonly typesRepository: ListAllExpenditureTypeRepository,
  ) {}

  async list(): ListAllExpenditureType.Result {
    const types = await this.typesRepository.findAll();

    return types;
  }
}
