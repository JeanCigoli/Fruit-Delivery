export interface AddRelClientToAddressRepository {
  createRelationship(client: number, address: number): Promise<void>;
}
