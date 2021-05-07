import { DbAuthenticationToken } from '../../../data/usecases/db-authentication-token';
import { JwtAdapter } from '../../../infra/cryptography';
import { CompanyRepository } from '../../../infra/db/mysql/company-repository';
import { AuthMiddleware } from '../../../presentation/middleware/auth-middleware';
import { JWT } from '../../../utils/constants';

export function makeAuthMiddleware() {
  const companyRepository = new CompanyRepository();
  const jwtAdapt = new JwtAdapter(JWT.APP_SECRET);

  const dbAuth = new DbAuthenticationToken(companyRepository, jwtAdapt);

  return new AuthMiddleware(dbAuth);
}
