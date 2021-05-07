import { AddCompany } from '../../domain/usecases/add-company';
import { Hash } from '../protocols/cryptography';
import {
  AddAddressRepository,
  ListCompanyByDocumentRepository,
  AddCompanyRepository,
  AddRelCompanyToAddressRepository,
} from '../protocols/db';

export class DbAddCompany implements AddCompany {
  constructor(
    private readonly addCompanyRepository: AddCompanyRepository,
    private readonly companyByDocument: ListCompanyByDocumentRepository,
    private readonly addRelCompanyToAddress: AddRelCompanyToAddressRepository,
    private readonly addAddressRepository: AddAddressRepository,
    private readonly bcrypt: Hash,
  ) {}

  async add(params: AddCompany.Params): AddCompany.Result {
    const companyExist = await this.companyByDocument.findByDocument(
      params.document,
    );

    if (companyExist) {
      throw new Error('COMPANY_EXIST');
    }

    const password = await this.bcrypt.hash(params.password);

    const [addressId] = await this.addAddressRepository.create(params.address);

    const [companyId] = await this.addCompanyRepository.create({
      document: params.document,
      name: params.name,
      login: params.login,
      password,
    });

    await this.addRelCompanyToAddress.createRelationship(companyId, addressId);

    return {
      id: companyId,
      ...params,
      password,
      address: {
        id: addressId,
        ...params.address,
      },
    };
  }
}
