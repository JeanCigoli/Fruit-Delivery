import { Authentication } from '../../domain/usecases/authentication';
import { HashComparer, Encrypt } from '../../data/protocols/cryptography';
import { LoadCompanyByLoginRepository } from '../protocols/db';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadCompanyByLoginRepository: LoadCompanyByLoginRepository,
    private readonly hashComparer: HashComparer,
    private readonly jwt: Encrypt,
  ) {}

  async auth(params: Authentication.Params): Authentication.Result {
    const account = await this.loadCompanyByLoginRepository.loadByLogin(
      params.login,
    );

    if (!account) {
      throw new Error('ACCOUNT_NOT_FOUND');
    }

    const isValid = await this.hashComparer.compare(
      params.password,
      account.password,
    );

    if (!isValid) {
      throw new Error('ACCOUNT_NOT_FOUND');
    }

    const accessToken = await this.jwt.encrypt(account.id.toString());

    return {
      accessToken,
      name: account.name,
    };
  }
}
