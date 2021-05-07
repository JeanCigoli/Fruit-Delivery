import { AddSale } from '../../domain/usecases/add-sale';
import {
  ListProductByIdRepository,
  ListInventoryByProductRepository,
  UpdateInventoryRepository,
  AddRelSaleToProductRepository,
  AddSaleRepository,
} from '../protocols/db';

export class DbAddSale implements AddSale {
  constructor(
    private readonly productById: ListProductByIdRepository,
    private readonly adSaleRepository: AddSaleRepository,
    private readonly listInventoryByProductRepository: ListInventoryByProductRepository,
    private readonly updateInventoryRepository: UpdateInventoryRepository,
    private readonly addRelSaleToProductRepository: AddRelSaleToProductRepository,
  ) {}

  async create(params: AddSale.Params): AddSale.Result {
    const mapProducts = await Promise.all(
      params.products.map(async (value) => {
        const product = await this.productById.findById(value.id);

        if (!product) {
          throw new Error('PRODUCT_NOT_FOUND');
        }

        return {
          productId: value.id,
          quantity: value.quantity,
          unitValue: product.prod.valueSale,
          finalValue: product.prod.valueSale * value.quantity,
        };
      }),
    );

    const amount = mapProducts.reduce(
      (accumulator, current) => (accumulator += current.finalValue),
      0,
    );

    const [saleId] = await this.adSaleRepository.create({
      value: amount,
      freightValue: params.freightValue,
      clientId: params.clientId,
      paymentType: params.paymentType,
    });

    const mapInventoryProduct = await Promise.all(
      params.products.map(async (value) => {
        const inventory = await this.listInventoryByProductRepository.findByProduct(
          value.id,
        );

        await this.updateInventoryRepository.update({
          quantity: inventory.quantity - value.quantity,
          productId: value.id,
        });

        return {
          productId: value.id,
          quantity: value.quantity,
          saleId,
        };
      }),
    );

    await this.addRelSaleToProductRepository.bulkCreate(mapInventoryProduct);

    return {
      id: saleId,
      value: (amount + params.freightValue).toFixed(2),
    };
  }
}
