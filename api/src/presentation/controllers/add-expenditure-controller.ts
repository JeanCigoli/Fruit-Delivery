import { AddExpenditure } from '../../domain/usecases/add-expenditure';
import { makeError } from '../../utils';
import { created, notFound, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddExpenditureController implements Controller {
  constructor(private readonly addExpenditure: AddExpenditure) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const expenditure = await this.addExpenditure.add({
        ...httpRequest.body,
        companyId: httpRequest.token?.id,
      });

      return created('A despesa foi incluída com sucesso', expenditure);
    } catch (error) {
      switch (error.message) {
        case 'TYPE_NOT_FOUND':
          return notFound(
            makeError(
              'expenditureType',
              'O tipo da despesa não foi encontrado',
            ),
          );
        default:
          return serverError(error);
      }
    }
  }
}
