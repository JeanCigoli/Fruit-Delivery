import { ListProductById } from '../../domain/usecases/list-product-by-id';
import { getUrlImage, toInt } from '../../utils';
import { ListProductByIdRepository } from '../protocols/db';

export class DbListProductById implements ListProductById {
  constructor(private readonly product: ListProductByIdRepository) {}

  async list(id: string): ListProductById.Result {
    const product = await this.product.findById(toInt(id));

    if (!product) {
      throw new Error('PRODUCT_NOT_FOUND');
    }

    return {
      ...product.prod,
      image: getUrlImage(product.prod.image),
      type: product.type,
      units: product.units,
      inventory: product.inventory,
    };
  }
}
