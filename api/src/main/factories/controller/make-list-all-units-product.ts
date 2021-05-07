import { DbListAllUnitsProduct } from '../../../data/usecases/db-list-all-units-product';
import { ProductUnitRepository } from '../../../infra/db/mysql/product-units-repository';
import { ListAllUnitsProductController } from '../../../presentation/controllers/list-all-units-product-controller';

export function makeListAllProductUnits() {
  const unitsProductRepository = new ProductUnitRepository();
  const dbListAllUnits = new DbListAllUnitsProduct(unitsProductRepository);
  return new ListAllUnitsProductController(dbListAllUnits);
}
