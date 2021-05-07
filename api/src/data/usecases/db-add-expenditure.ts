import { AddExpenditure } from '../../domain/usecases/add-expenditure';
import {
  AddExpenditureRepository,
  ListExpenditureTypeByIdRepository,
} from '../protocols/db';

export class DbAddExpenditure implements AddExpenditure {
  constructor(
    private readonly expenditureTypeRepository: ListExpenditureTypeByIdRepository,
    private readonly addExpenditureRepository: AddExpenditureRepository,
  ) {}

  async add(params: AddExpenditure.Params): AddExpenditure.Result {
    const type = await this.expenditureTypeRepository.findById(
      params.expenditureType,
    );

    if (!type) {
      throw new Error('TYPE_NOT_FOUND');
    }

    const [expenditureId] = await this.addExpenditureRepository.create(params);

    return {
      id: expenditureId,
      name: params.name,
      value: params.value,
    };
  }
}
