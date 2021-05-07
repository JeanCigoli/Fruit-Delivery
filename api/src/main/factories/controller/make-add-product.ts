import { ProductRepository } from '../../../infra/db/mysql/product-repository';
import { InventoryRepository } from '../../../infra/db/mysql/inventory-repository';
import { DbAddProduct } from '../../../data/usecases/db-add-product';
import { AddProductsController } from '../../../presentation/controllers/add-products-controller';

export function makeAddProduct() {
  const productRepository = new ProductRepository();
  const inventoryRepository = new InventoryRepository();
  const dbAddProduct = new DbAddProduct(
    productRepository,
    productRepository,
    inventoryRepository,
  );
  return new AddProductsController(dbAddProduct);
}
