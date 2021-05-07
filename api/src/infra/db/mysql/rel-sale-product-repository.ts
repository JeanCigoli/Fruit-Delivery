import { AddRelSaleToProductRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class RelSaleProductRepository implements AddRelSaleToProductRepository {
  bulkCreate(
    params: AddRelSaleToProductRepository.Params,
  ): AddRelSaleToProductRepository.Result {
    const mapInsert = params.map((value) => ({
      quantity: value.quantity,
      id_product: value.productId,
      id_sale: value.saleId,
    }));

    return knex('tb_rel_sale_product').insert(mapInsert);
  }
}
