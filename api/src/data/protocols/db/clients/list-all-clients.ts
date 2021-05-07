export interface ListAllClientsRepository {
  findAll(): ListAllClientsRepository.Result;
}

export namespace ListAllClientsRepository {
  type Client = {
    id: number;
    name: string;
    phone: string;
    document: string;
    createdAt: string;
  };

  export type Result = Promise<Client[]>;
}
