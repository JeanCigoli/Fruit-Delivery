import { ListAllExpenditureType } from '../../domain/usecases/list-all-type-expenditure';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListAllExpenditureTypeController implements Controller {
  constructor(private readonly allTypes: ListAllExpenditureType) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const types = await this.allTypes.list();

      return ok('Consulta concluída com sucesso', types);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
