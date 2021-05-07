export interface AddRelCompanyToAddressRepository {
  createRelationship(company: number, address: number): Promise<void>;
}
