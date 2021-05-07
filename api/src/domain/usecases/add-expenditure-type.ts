export interface AddExpenditureType {
  add(params: AddExpenditureType.Params): AddExpenditureType.Result;
}

export namespace AddExpenditureType {
  export type Params = {
    type: string;
  };

  export type Result = Promise<{
    id: number;
    type: string;
  }>;
}
