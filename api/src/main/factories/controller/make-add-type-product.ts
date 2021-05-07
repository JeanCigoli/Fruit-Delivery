import { DbAddProductType } from '../../../data/usecases/db-add-type-product';
import { ProductTypeRepository } from '../../../infra/db/mysql/product-type-repository';
import { AddTypeProductController } from '../../../presentation/controllers/add-type-product-controller';

export function makeAddTypeProduct() {
  const typeProductRepository = new ProductTypeRepository();
  const dbAddTypeProduct = new DbAddProductType(
    typeProductRepository,
    typeProductRepository,
  );
  return new AddTypeProductController(dbAddTypeProduct);
}
