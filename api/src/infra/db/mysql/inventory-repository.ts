import { AddInventoryRepository } from '../../../data/protocols/db/inventory/add-inventory';
import { ListInventoryByProductRepository } from '../../../data/protocols/db/inventory/list-by-product-id';
import { UpdateInventoryRepository } from '../../../data/protocols/db/inventory/update-inventory';
import knex from './helpers/connection';

export class InventoryRepository
  implements
    AddInventoryRepository,
    ListInventoryByProductRepository,
    UpdateInventoryRepository {
  update(
    inventory: UpdateInventoryRepository.Params,
  ): UpdateInventoryRepository.Result {
    return knex('tb_inventory')
      .update({
        quantity: inventory.quantity,
      })
      .where('id_product', inventory.productId);
  }

  findByProduct(productId: number): ListInventoryByProductRepository.Result {
    return knex('tb_inventory')
      .select('id_product as productId', 'quantity')
      .where('id_product', productId)
      .first();
  }

  create(params: AddInventoryRepository.Params): AddInventoryRepository.Result {
    return knex('tb_inventory').insert({
      quantity: params.quantity,
      id_product: params.productId,
    });
  }
}
