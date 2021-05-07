import { AddCompany } from '../../domain/usecases/add-company';
import { makeError } from '../../utils';
import { conflict, created, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddCompanyController implements Controller {
  constructor(private readonly addCompany: AddCompany) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const company = await this.addCompany.add(httpRequest.body);

      return created('A empresa foi criada com sucesso', company);
    } catch (error) {
      switch (error.message) {
        case 'COMPANY_EXIST':
          return conflict(
            makeError('Esta empresa já se encontra cadastrado', 'name'),
          );
        default:
          return serverError(error);
      }
    }
  }
}
