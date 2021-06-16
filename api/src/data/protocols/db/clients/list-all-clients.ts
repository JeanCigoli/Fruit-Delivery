export interface ListAllClientsRepository {
  findAll(
    params: ListAllClientsRepository.Params,
  ): ListAllClientsRepository.Result;
}

export namespace ListAllClientsRepository {
  type Client = {
    id: number;
    name: string;
    phone: string;
    document: string;
    createdAt: string;
  };

  export type Params = {
    offset: number;
    limit: number;
  };

  export type Result = Promise<Client[]>;
}
