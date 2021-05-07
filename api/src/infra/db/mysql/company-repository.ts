import {
  AddCompanyRepository,
  ListCompanyByDocumentRepository,
  LoadCompanyByLoginRepository,
} from '../../../data/protocols/db';
import { ListCompanyByIdRepository } from '../../../data/protocols/db/company/list-company-by-id';
import knex from './helpers/connection';

export class CompanyRepository
  implements
    AddCompanyRepository,
    ListCompanyByDocumentRepository,
    LoadCompanyByLoginRepository,
    ListCompanyByIdRepository {
  findById(id: number): ListCompanyByIdRepository.Result {
    return knex('tb_company')
      .select('id_company as id', 'name', 'document', 'login', 'password')
      .where('id_company', id)
      .first();
  }

  loadByLogin(login: string): LoadCompanyByLoginRepository.Result {
    return knex('tb_company')
      .select('id_company as id', 'name', 'document', 'login', 'password')
      .where('login', login)
      .first();
  }

  findByDocument(document: string): ListCompanyByDocumentRepository.Result {
    return knex('tb_company')
      .select('id_company as id', 'name', 'document', 'login', 'password')
      .where('document', document)
      .first();
  }

  create(company: AddCompanyRepository.Params): AddCompanyRepository.Result {
    return knex('tb_company').insert(company);
  }
}
