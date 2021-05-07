import { ListAllExpenditureByDate } from '../../domain/usecases/list-all-expenditure-by-date';
import { ListExpenditureByDateRepository } from '../protocols/db';

export class DbListAllExpenditureByDate implements ListAllExpenditureByDate {
  constructor(
    private readonly expenditureByDate: ListExpenditureByDateRepository,
  ) {}

  async listByDate(
    params: ListAllExpenditureByDate.Params,
  ): ListAllExpenditureByDate.Result {
    const dates = {
      init: `${params.init} 00:00:00`,
      final: `${params.final} 23:59:59`,
    };

    const listExpenditure = await this.expenditureByDate.findBetweenDate(dates);

    return listExpenditure;
  }
}
