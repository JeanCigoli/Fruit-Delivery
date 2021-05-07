import { DbAuthentication } from '../../../data/usecases/db-authentication';
import { CompanyRepository } from '../../../infra/db/mysql/company-repository';
import { BcryptAdapter } from '../../../infra/cryptography/bcrypt-adapter';
import { JwtAdapter } from '../../../infra/cryptography';
import { JWT } from '../../../utils/constants';
import { AuthenticationController } from '../../../presentation/controllers/authentication-controller';

export function makeAuthentication() {
  const salt = 10;

  const companyRepository = new CompanyRepository();
  const hashAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(JWT.APP_SECRET);

  const dbAuthentication = new DbAuthentication(
    companyRepository,
    hashAdapter,
    jwtAdapter,
  );

  return new AuthenticationController(dbAuthentication);
}
