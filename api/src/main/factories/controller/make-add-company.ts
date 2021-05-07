import { DbAddCompany } from '../../../data/usecases/db-add-company';
import { BcryptAdapter } from '../../../infra/cryptography';
import { AddressRepository } from '../../../infra/db/mysql/address-repository';
import { CompanyRepository } from '../../../infra/db/mysql/company-repository';
import { RelCompanyAddressRepository } from '../../../infra/db/mysql/rel-company-address-repository';
import { AddCompanyController } from '../../../presentation/controllers/add-company-controller';

export function makeAddCompany() {
  const salt = 10;
  const bcrypt = new BcryptAdapter(salt);

  const addressRepository = new AddressRepository();
  const relCompanyToAddressRepository = new RelCompanyAddressRepository();
  const companyRepository = new CompanyRepository();

  const dbAddCompany = new DbAddCompany(
    companyRepository,
    companyRepository,
    relCompanyToAddressRepository,
    addressRepository,
    bcrypt,
  );

  return new AddCompanyController(dbAddCompany);
}
