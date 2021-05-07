import { DbListAllProducts } from '../../../data/usecases/db-list-all-products';
import { ProductRepository } from '../../../infra/db/mysql/product-repository';
import { ListAllProductsController } from '../../../presentation/controllers/list-all-products-controller';

export function makeListAllProducts() {
  const productRepository = new ProductRepository();
  const dbListAllProducts = new DbListAllProducts(
    productRepository,
    productRepository,
  );
  return new ListAllProductsController(dbListAllProducts);
}
