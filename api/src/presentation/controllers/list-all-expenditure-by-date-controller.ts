import { ListAllExpenditureByDate } from '../../domain/usecases/list-all-expenditure-by-date';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListAllExpenditureByDateController implements Controller {
  constructor(private readonly expenditureByDate: ListAllExpenditureByDate) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { init, final } = httpRequest.query;

      const expenditures = await this.expenditureByDate.listByDate({
        init,
        final,
      });

      return ok('Consulta concluída com sucesso', expenditures);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
