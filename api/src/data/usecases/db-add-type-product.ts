import { AddTypeProduct } from '../../domain/usecases/add-type-product';
import {
  ListTypeProductByTypeRepository,
  AddTypeProductRepository,
} from '../protocols/db';

export class DbAddProductType implements AddTypeProduct {
  constructor(
    private readonly addTypeRepository: AddTypeProductRepository,
    private readonly listByTypeRepository: ListTypeProductByTypeRepository,
  ) {}

  async add(params: AddTypeProduct.Params): Promise<AddTypeProduct.Result> {
    const clientExist = await this.listByTypeRepository.findByType(params.type);

    if (clientExist) {
      throw new Error('TYPE_EXIST');
    }

    const [typeId] = await this.addTypeRepository.create(params);

    return {
      id: typeId,
      type: params.type,
    };
  }
}
