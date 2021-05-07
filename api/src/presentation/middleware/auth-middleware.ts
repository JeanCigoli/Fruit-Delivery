import { AuthenticationToken } from '../../domain/usecases/authentication-token';
import { forbidden, ok } from '../../utils/response';
import { HttpResponse } from '../protocols';
import { Middleware } from '../protocols/middleware';

export class AuthMiddleware implements Middleware {
  constructor(private readonly dbAuthentication: AuthenticationToken) {}

  async handle(httpRequest: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = httpRequest;

      const account = await this.dbAuthentication.auth({ accessToken });

      return ok('Autenticação realizada com sucesso!', account);
    } catch (error) {
      return forbidden(error);
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken: string;
  };
}
