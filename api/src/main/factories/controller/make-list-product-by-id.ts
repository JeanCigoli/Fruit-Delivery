import { DbListProductById } from '../../../data/usecases/db-list-product-by-id';
import { ProductRepository } from '../../../infra/db/mysql/product-repository';
import { ListProductByIdController } from '../../../presentation/controllers/list-product-by-id-controller';

export function makeListProductById() {
  const productRepository = new ProductRepository();
  const dbListProductById = new DbListProductById(productRepository);
  return new ListProductByIdController(dbListProductById);
}
