import { DbAddExpenditureType } from '../../../data/usecases/db-add-type-expenditure';
import { ExpenditureTypeRepository } from '../../../infra/db/mysql/expenditure-type-repository';
import { AddTypeExpenditureController } from '../../../presentation/controllers/add-type-expenditure-controller';

export function makeAddExpenditureType() {
  const expenditureTypeRepository = new ExpenditureTypeRepository();
  const dbAddExpenditureType = new DbAddExpenditureType(
    expenditureTypeRepository,
    expenditureTypeRepository,
  );
  return new AddTypeExpenditureController(dbAddExpenditureType);
}
