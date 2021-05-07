import { ListAllTypeProduct } from '../../domain/usecases/list-all-type-product';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListAllTypesProductsController implements Controller {
  constructor(private readonly allTypes: ListAllTypeProduct) {}

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
