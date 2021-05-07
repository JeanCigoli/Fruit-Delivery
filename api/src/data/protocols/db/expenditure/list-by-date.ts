export interface ListExpenditureByDateRepository {
  findBetweenDate(
    params: ListExpenditureByDateRepository.Params,
  ): ListExpenditureByDateRepository.Result;
}

export namespace ListExpenditureByDateRepository {
  type Types = {
    id: number;
    name: string;
    value: number;
    expenditureType: string;
    createdAt: string;
  };

  export type Params = {
    init: string;
    final: string;
  };

  export type Result = Promise<Types[]>;
}
