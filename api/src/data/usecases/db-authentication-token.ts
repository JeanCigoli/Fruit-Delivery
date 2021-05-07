import { AuthenticationToken } from '../../domain/usecases/authentication-token';
import { Decrypt } from '../protocols/cryptography';
import { ListCompanyByIdRepository } from '../protocols/db/company/list-company-by-id';

export class DbAuthenticationToken implements AuthenticationToken {
  constructor(
    private readonly companyById: ListCompanyByIdRepository,
    private readonly jwt: Decrypt,
  ) {}

  async auth(params: AuthenticationToken.Params): AuthenticationToken.Result {
    const authHeader = params.accessToken;

    if (!authHeader) {
      throw new Error('TOKEN_NOT_FOUND');
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      throw new Error('TOKEN_NOT_FORMATTED');
    }

    const [bearer, token] = parts;

    if (!/^Bearer$/i.test(bearer)) {
      throw new Error('TOKEN_NOT_FORMATTED');
    }

    const decoded = await this.jwt.decrypt(token);

    const company = await this.companyById.findById(decoded.id);

    return {
      id: company.id,
      name: company.name,
    };
  }
}
