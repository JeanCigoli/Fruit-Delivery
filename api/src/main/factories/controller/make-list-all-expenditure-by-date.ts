import { DbListAllExpenditureByDate } from '../../../data/usecases/db-list-all-expenditure-by-date';
import { ExpenditureRepository } from '../../../infra/db/mysql/expenditure-repository';
import { ListAllExpenditureByDateController } from '../../../presentation/controllers/list-all-expenditure-by-date-controller';

export function makeListAllExpenditureByDate() {
  const expenditureRepository = new ExpenditureRepository();
  const dbListAllClients = new DbListAllExpenditureByDate(
    expenditureRepository,
  );
  return new ListAllExpenditureByDateController(dbListAllClients);
}
