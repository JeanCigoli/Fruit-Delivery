import { AddPaymentType } from '../../domain/usecases/add-payment-type';
import {
  AddPaymentTypeRepository,
  ListPaymentByTypeRepository,
} from '../protocols/db';

export class DbAddPaymentType implements AddPaymentType {
  constructor(
    private readonly findByTypeRepository: ListPaymentByTypeRepository,
    private readonly addPaymentRepository: AddPaymentTypeRepository,
  ) {}

  async add(params: AddPaymentType.Params): AddPaymentType.Result {
    const typeExist = await this.findByTypeRepository.findByType(params.type);

    if (typeExist) {
      throw new Error('TYPE_EXIST');
    }

    const [id] = await this.addPaymentRepository.create(params);

    return {
      id,
      type: params.type,
    };
  }
}
