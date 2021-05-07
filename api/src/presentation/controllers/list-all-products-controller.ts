import { ListAllProducts } from '../../domain/usecases/list-all-products';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListAllProductsController implements Controller {
  constructor(private readonly allProducts: ListAllProducts) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { page, limit } = httpRequest.query;

      const types = await this.allProducts.list({ page, limit });

      return ok('Consulta concluída com sucesso', types);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
