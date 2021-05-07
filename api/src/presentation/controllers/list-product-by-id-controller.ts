import { ListProductById } from '../../domain/usecases/list-product-by-id';
import { makeError } from '../../utils';
import { notFound, ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListProductByIdController implements Controller {
  constructor(private readonly productById: ListProductById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const product = await this.productById.list(id);

      return ok('Consulta concluída com sucesso', product);
    } catch (error) {
      switch (error.message) {
        case 'PRODUCT_NOT_FOUND':
          return notFound(makeError('O produto não foi encontrado', 'id'));
        default:
          return serverError(error);
      }
    }
  }
}
