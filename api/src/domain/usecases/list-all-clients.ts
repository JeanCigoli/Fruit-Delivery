export interface ListAllClients {
  list(): ListAllClients.Result;
}

export namespace ListAllClients {
  type Client = {
    id: number;
    name: string;
    phone: string;
    document: string;
    createdAt: string;
  };

  export type Result = Promise<Client[]>;
}
