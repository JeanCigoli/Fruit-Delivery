import { DbAddExpenditure } from '../../../data/usecases/db-add-expenditure';
import { ExpenditureRepository } from '../../../infra/db/mysql/expenditure-repository';
import { ExpenditureTypeRepository } from '../../../infra/db/mysql/expenditure-type-repository';
import { AddExpenditureController } from '../../../presentation/controllers/add-expenditure-controller';

export function makeAddExpenditure() {
  const expenditureRepository = new ExpenditureRepository();
  const expenditureTypeRepository = new ExpenditureTypeRepository();

  const dbAddExpenditure = new DbAddExpenditure(
    expenditureTypeRepository,
    expenditureRepository,
  );

  return new AddExpenditureController(dbAddExpenditure);
}
