export interface AddTypeProductRepository {
  create(
    type: AddTypeProductRepository.Params,
  ): AddTypeProductRepository.Result;
}

export namespace AddTypeProductRepository {
  export type Params = {
    type: string;
  };

  export type Result = Promise<number[]>;
}
