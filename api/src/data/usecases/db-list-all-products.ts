import { ListAllProducts } from '../../domain/usecases/list-all-products';
import {
  ListAllProductsRepository,
  CountAllProductsRepository,
} from '../protocols/db';

export class DbListAllProducts implements ListAllProducts {
  constructor(
    private readonly productsRepository: ListAllProductsRepository,
    private readonly countProductsRepository: CountAllProductsRepository,
  ) {}

  async list(params: ListAllProducts.Params): ListAllProducts.Result {
    const { limit, page } = params;
    const offset = page === 0 ? 0 : page * limit;

    const products = await this.productsRepository.findAll({
      limit: limit ? limit : 10,
      offset,
    });

    const [quantity] = await this.countProductsRepository.countAll();

    return {
      data: products,
      total: quantity.total,
      currentPage: page,
      limitPage: Math.ceil(quantity.total / limit) - 1,
    };
  }
}
