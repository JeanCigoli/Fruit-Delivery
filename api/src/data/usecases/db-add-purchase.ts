import { AddPurchase } from '../../domain/usecases/add-purchase';
import {
  AddPurchaseRepository,
  ListProductByIdRepository,
  ListInventoryByProductRepository,
  UpdateInventoryRepository,
  AddRelPurchaseToProductRepository,
} from '../protocols/db';

export class DbAddPurchase implements AddPurchase {
  constructor(
    private readonly productById: ListProductByIdRepository,
    private readonly addPurchaseRepository: AddPurchaseRepository,
    private readonly listInventoryByProductRepository: ListInventoryByProductRepository,
    private readonly updateInventoryRepository: UpdateInventoryRepository,
    private readonly addRelPurchaseToProductRepository: AddRelPurchaseToProductRepository,
  ) {}

  async create(params: AddPurchase.Params): AddPurchase.Result {
    const mapProducts = await Promise.all(
      params.products.map(async (value) => {
        const product = await this.productById.findById(value.id);

        if (!product) {
          throw new Error('PRODUCT_NOT_FOUND');
        }

        return {
          productId: value.id,
          quantity: value.quantity,
          unitValue: product.prod.valueBuy,
          finalValue: product.prod.valueBuy * value.quantity,
        };
      }),
    );

    const amount = mapProducts.reduce(
      (accumulator, current) => (accumulator += current.finalValue),
      0,
    );

    const [purchaseId] = await this.addPurchaseRepository.create({
      name: params.name,
      value: amount,
      freightValue: params.freightValue,
      companyId: params.companyId,
      paymentType: params.paymentType,
    });

    const mapInventoryProduct = await Promise.all(
      params.products.map(async (value) => {
        const inventory = await this.listInventoryByProductRepository.findByProduct(
          value.id,
        );

        await this.updateInventoryRepository.update({
          quantity: inventory.quantity + value.quantity,
          productId: value.id,
        });

        return {
          productId: value.id,
          quantity: value.quantity,
          purchaseId,
        };
      }),
    );

    await this.addRelPurchaseToProductRepository.bulkCreate(
      mapInventoryProduct,
    );

    return {
      id: purchaseId,
      name: params.name,
      value: (amount + params.freightValue).toFixed(2),
    };
  }
}
