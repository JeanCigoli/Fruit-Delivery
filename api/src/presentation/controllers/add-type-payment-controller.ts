import { AddPaymentType } from '../../domain/usecases/add-payment-type';
import { makeError } from '../../utils';
import { conflict, created, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddPaymentTypeController implements Controller {
  constructor(private readonly paymentType: AddPaymentType) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const type = await this.paymentType.add(httpRequest.body);

      return created('Tipo de pagamento cadastrado com sucesso', type);
    } catch (error) {
      switch (error.message) {
        case 'TYPE_EXIST':
          return conflict(
            makeError('Este tipo já se encontra cadastrado', 'type'),
          );
        default:
          return serverError(error);
      }
    }
  }
}
