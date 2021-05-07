import { AddRelCompanyToAddressRepository } from '../../../data/protocols/db';
import knex from './helpers/connection';

export class RelCompanyAddressRepository
  implements AddRelCompanyToAddressRepository {
  createRelationship(company: number, address: number): Promise<void> {
    return knex('tb_rel_company_address').insert({
      id_address: address,
      id_company: company,
    });
  }
}
