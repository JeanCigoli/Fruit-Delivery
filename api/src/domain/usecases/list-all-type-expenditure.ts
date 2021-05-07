export interface ListAllExpenditureType {
  list(): ListAllExpenditureType.Result;
}

export namespace ListAllExpenditureType {
  type Types = {
    id: number;
    type: string;
    createdAt: string;
  };

  export type Result = Promise<Types[]>;
}
