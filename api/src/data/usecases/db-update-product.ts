import { UpdateProducts } from '../../domain/usecases/update-product';
import { getUrlImage, toInt } from '../../utils';
import { removeFile } from '../../utils/file';
import {
  ListProductByIdRepository,
  UpdateProductsRepository,
} from '../protocols/db';

export class DbUpdateProduct implements UpdateProducts {
  constructor(
    private readonly productByIdRepository: ListProductByIdRepository,
    private readonly updateProductRepository: UpdateProductsRepository,
  ) {}

  async update(params: UpdateProducts.Params): UpdateProducts.Result {
    const product = await this.productByIdRepository.findById(toInt(params.id));

    if (!product) {
      throw new Error('PRODUCT_NOT_FOUND');
    }

    const image = params.image ? params.image : product.prod.image;

    await this.updateProductRepository.update(
      {
        name: params.name,
        productType: params.productType,
        productUnit: params.productUnit,
        valueBuy: params.valueBuy,
        valueSale: params.valueSale,
        image,
      },
      product.prod.id,
    );

    if (params.image) {
      await removeFile(product.prod.image);
    }

    return {
      ...params,
      image: getUrlImage(image),
    };
  }
}
