import { AddTypeProduct } from '../../domain/usecases/add-type-product';
import { makeError } from '../../utils';
import { conflict, created, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddTypeProductController implements Controller {
  constructor(private readonly typeProduct: AddTypeProduct) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const type = await this.typeProduct.add(httpRequest.body);

      return created('Tipo de produto cadastrado com sucesso', type);
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
