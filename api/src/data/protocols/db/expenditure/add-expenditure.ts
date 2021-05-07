export interface AddExpenditureRepository {
  create(
    params: AddExpenditureRepository.Params,
  ): AddExpenditureRepository.Result;
}

export namespace AddExpenditureRepository {
  export type Params = {
    name: string;
    value: number;
    expenditureType: number;
    companyId: number;
  };

  export type Result = Promise<number[]>;
}
