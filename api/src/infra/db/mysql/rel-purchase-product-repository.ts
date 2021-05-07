import { AddRelPurchaseToProductRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class RelPurchaseProductRepository
  implements AddRelPurchaseToProductRepository {
  bulkCreate(
    params: AddRelPurchaseToProductRepository.Params,
  ): AddRelPurchaseToProductRepository.Result {
    const mapInsert = params.map((value) => ({
      quantity: value.quantity,
      id_product: value.productId,
      id_purchase: value.purchaseId,
    }));

    return knex('tb_rel_purchase_product').insert(mapInsert);
  }
}
