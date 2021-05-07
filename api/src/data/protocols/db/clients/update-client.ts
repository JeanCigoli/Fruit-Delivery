export interface UpdateClientRepository {
  update(
    client: UpdateClientRepository.Params,
    id: number,
  ): UpdateClientRepository.Result;
}

export namespace UpdateClientRepository {
  export type Params = {
    name: string;
    document: string;
    phone: string;
  };

  export type Result = Promise<number>;
}
