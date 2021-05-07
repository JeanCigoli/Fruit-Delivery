export interface AddExpenditure {
  add(params: AddExpenditure.Params): AddExpenditure.Result;
}

export namespace AddExpenditure {
  export type Params = {
    name: string;
    value: number;
    expenditureType: number;
    companyId: number;
  };

  export type Result = Promise<{
    id: number;
    name: string;
    value: number;
  }>;
}
