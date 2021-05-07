import { AddExpenditureType } from '../../domain/usecases/add-expenditure-type';
import { makeError } from '../../utils';
import { conflict, created, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddTypeExpenditureController implements Controller {
  constructor(private readonly typeExpenditure: AddExpenditureType) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const type = await this.typeExpenditure.add(httpRequest.body);

      return created('Tipo de despesa cadastrado com sucesso', type);
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
