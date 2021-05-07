import { ListAllTypeProduct } from '../../domain/usecases/list-all-type-product';
import { ListAllTypeProductRepository } from '../protocols/db';

export class DbListAllTypesProducts implements ListAllTypeProduct {
  constructor(private readonly typesRepository: ListAllTypeProductRepository) {}

  async list(): ListAllTypeProduct.Result {
    const types = await this.typesRepository.findAll();

    return types;
  }
}
