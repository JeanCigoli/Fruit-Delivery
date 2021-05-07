import { AddSale } from '../../domain/usecases/add-sale';
import { makeError } from '../../utils';
import { notFound, ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddSaleController implements Controller {
  constructor(private readonly addSale: AddSale) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const purchase = await this.addSale.create(httpRequest.body);

      return ok('Venda realizada com sucesso', purchase);
    } catch (error) {
      switch (error.message) {
        case 'PRODUCT_NOT_FOUND':
          return notFound(
            makeError('productId', 'Algum produto não está cadastrado!'),
          );
        default:
          return serverError(error);
      }
    }
  }
}
