import { DbUpdateProduct } from '../../../data/usecases/db-update-product';
import { ProductRepository } from '../../../infra/db/mysql/product-repository';
import { UpdateProductsController } from '../../../presentation/controllers/update-product-controller';

export function makeUpdateProduct() {
  const productRepository = new ProductRepository();
  const dbUpdateProduct = new DbUpdateProduct(
    productRepository,
    productRepository,
  );
  return new UpdateProductsController(dbUpdateProduct);
}
