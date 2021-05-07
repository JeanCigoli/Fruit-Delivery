import { ListAllUnitsProduct } from '../../domain/usecases/list-all-unit-products';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListAllUnitsProductController implements Controller {
  constructor(private readonly listAllUnits: ListAllUnitsProduct) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const types = await this.listAllUnits.list();

      return ok('Consulta concluída com sucesso', types);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
