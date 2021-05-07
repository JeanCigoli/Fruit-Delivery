import { AddPurchase } from '../../domain/usecases/add-purchase';
import { makeError } from '../../utils';
import { notFound, ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddPurchaseController implements Controller {
  constructor(private readonly addPurchase: AddPurchase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const purchase = await this.addPurchase.create({
        ...httpRequest.body,
        companyId: httpRequest.token?.id,
      });

      return ok('Compra criada com sucesso', purchase);
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
