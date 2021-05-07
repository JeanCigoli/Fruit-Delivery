import { DbListAllExpenditureType } from '../../../data/usecases/db-list-all-types-expenditure';
import { ExpenditureTypeRepository } from '../../../infra/db/mysql/expenditure-type-repository';
import { ListAllExpenditureTypeController } from '../../../presentation/controllers/list-all-types-expenditures-controller';

export function makeListAllExpendituresTypes() {
  const expenditureTypeRepository = new ExpenditureTypeRepository();
  const dbListAllExpenditureType = new DbListAllExpenditureType(
    expenditureTypeRepository,
  );
  return new ListAllExpenditureTypeController(dbListAllExpenditureType);
}
