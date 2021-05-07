import { ListAllUnitsProduct } from '../../domain/usecases/list-all-unit-products';
import { ListAllUnitsProductRepository } from '../protocols/db';

export class DbListAllUnitsProduct implements ListAllUnitsProduct {
  constructor(
    private readonly allUnitsRepository: ListAllUnitsProductRepository,
  ) {}

  async list(): ListAllUnitsProduct.Result {
    const units = await this.allUnitsRepository.findAll();

    return units;
  }
}
