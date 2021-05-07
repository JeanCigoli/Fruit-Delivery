import { Authentication } from '../../domain/usecases/authentication';
import { makeError } from '../../utils';
import { badRequest, ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AuthenticationController implements Controller {
  constructor(private readonly authentication: Authentication) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const access = await this.authentication.auth(httpRequest.body);

      return ok('Autenticação realizada com sucesso', access);
    } catch (error) {
      switch (error.message) {
        case 'ACCOUNT_NOT_FOUND':
          return badRequest(makeError('login', 'Usuário e senha incorretos'));
        default:
          return serverError(error);
      }
    }
  }
}
