import { ListAllPaymentsType } from '../../domain/usecases/list-all-type-payment';
import { ListAllPaymentTypeRepository } from '../protocols/db';

export class DbListAllPaymentsType implements ListAllPaymentsType {
  constructor(private readonly typesRepository: ListAllPaymentTypeRepository) {}

  async list(): ListAllPaymentsType.Result {
    const types = await this.typesRepository.findAll();

    return types;
  }
}
