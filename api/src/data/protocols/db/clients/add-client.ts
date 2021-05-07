export interface AddClientRepository {
  create(client: AddClientRepository.Params): AddClientRepository.Result;
}

export namespace AddClientRepository {
  export type Params = {
    name: string;
    document: string;
    phone: string;
  };

  export type Result = Promise<number[]>;
}
