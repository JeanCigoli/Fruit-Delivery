import { AddProducts } from '../../domain/usecases/add-products';
import {
  AddProductsRepository,
  ListProductByNameRepository,
  AddInventoryRepository,
} from '../protocols/db';

export class DbAddProduct implements AddProducts {
  constructor(
    private readonly addProductRepository: AddProductsRepository,
    private readonly listByNameRepository: ListProductByNameRepository,
    private readonly addInventoryRepository: AddInventoryRepository,
  ) {}

  async add(params: AddProducts.Params): AddProducts.Result {
    const productExist = await this.listByNameRepository.findByName(
      params.name,
    );

    if (productExist) {
      throw new Error('PRODUCT_EXIST');
    }

    const [productId] = await this.addProductRepository.create(params);

    await this.addInventoryRepository.create({
      productId,
      quantity: 0,
    });

    return {
      id: productId,
      ...params,
    };
  }
}
