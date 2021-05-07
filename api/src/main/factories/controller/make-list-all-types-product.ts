import { DbListAllTypesProducts } from '../../../data/usecases/db-list-all-types-products';
import { ProductTypeRepository } from '../../../infra/db/mysql/product-type-repository';
import { ListAllTypesProductsController } from '../../../presentation/controllers/list-all-types-products-controller';

export function makeListAllProductTypes() {
  const typeProductRepository = new ProductTypeRepository();
  const dbListAllTypes = new DbListAllTypesProducts(typeProductRepository);
  return new ListAllTypesProductsController(dbListAllTypes);
}
