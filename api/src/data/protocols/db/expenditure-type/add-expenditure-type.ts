export interface AddExpenditureTypeRepository {
  create(
    type: AddExpenditureTypeRepository.Params,
  ): AddExpenditureTypeRepository.Result;
}

export namespace AddExpenditureTypeRepository {
  export type Params = {
    type: string;
  };

  export type Result = Promise<number[]>;
}
