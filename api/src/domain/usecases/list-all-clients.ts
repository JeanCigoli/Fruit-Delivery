export interface ListAllClients {
  list(params: ListAllClients.Params): ListAllClients.Result;
}

export namespace ListAllClients {
  type Client = {
    id: number;
    name: string;
    phone: string;
    document: string;
    createdAt: string;
  };

  export type Params = {
    page: number;
    limit: number;
  };

  export type Result = Promise<{
    data: Client[];
    total: number;
    currentPage: number;
    limitPage: number;
  }>;
}
