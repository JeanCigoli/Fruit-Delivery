import { AddExpenditureType } from '../../domain/usecases/add-expenditure-type';
import {
  AddExpenditureTypeRepository,
  ListExpenditureByTypeRepository,
} from '../protocols/db';

export class DbAddExpenditureType implements AddExpenditureType {
  constructor(
    private readonly findByTypeRepository: ListExpenditureByTypeRepository,
    private readonly addExpenditureRepository: AddExpenditureTypeRepository,
  ) {}

  async add(params: AddExpenditureType.Params): AddExpenditureType.Result {
    const typeExist = await this.findByTypeRepository.findByType(params.type);

    if (typeExist) {
      throw new Error('TYPE_EXIST');
    }

    const [id] = await this.addExpenditureRepository.create(params);

    return {
      id,
      type: params.type,
    };
  }
}
