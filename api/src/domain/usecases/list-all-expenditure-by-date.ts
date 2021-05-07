export interface ListAllExpenditureByDate {
  listByDate(
    params: ListAllExpenditureByDate.Params,
  ): ListAllExpenditureByDate.Result;
}

export namespace ListAllExpenditureByDate {
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
