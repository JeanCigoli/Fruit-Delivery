import { DbAddPurchase } from '../../../data/usecases/db-add-purchase';
import { InventoryRepository } from '../../../infra/db/mysql/inventory-repository';
import { ProductRepository } from '../../../infra/db/mysql/product-repository';
import { PurchaseRepository } from '../../../infra/db/mysql/purchase-repository';
import { RelPurchaseProductRepository } from '../../../infra/db/mysql/rel-purchase-product-repository';
import { AddPurchaseController } from '../../../presentation/controllers/add-purchase-controller';

export function makeAddPurchase() {
  const productRepository = new ProductRepository();
  const inventoryRepository = new InventoryRepository();
  const purchaseRepository = new PurchaseRepository();
  const relPurchaseProductRepository = new RelPurchaseProductRepository();

  const dbAddPurchase = new DbAddPurchase(
    productRepository,
    purchaseRepository,
    inventoryRepository,
    inventoryRepository,
    relPurchaseProductRepository,
  );

  return new AddPurchaseController(dbAddPurchase);
}
