import { DbAddSale } from '../../../data/usecases/db-add-sale';
import { InventoryRepository } from '../../../infra/db/mysql/inventory-repository';
import { ProductRepository } from '../../../infra/db/mysql/product-repository';
import { RelSaleProductRepository } from '../../../infra/db/mysql/rel-sale-product-repository';
import { SaleRepository } from '../../../infra/db/mysql/sale-repository';
import { AddSaleController } from '../../../presentation/controllers/add-sale-controller';

export function makeAddSale() {
  const productRepository = new ProductRepository();
  const inventoryRepository = new InventoryRepository();
  const saleRepository = new SaleRepository();
  const relSaleProductRepository = new RelSaleProductRepository();

  const dbAddSale = new DbAddSale(
    productRepository,
    saleRepository,
    inventoryRepository,
    inventoryRepository,
    relSaleProductRepository,
  );

  return new AddSaleController(dbAddSale);
}
