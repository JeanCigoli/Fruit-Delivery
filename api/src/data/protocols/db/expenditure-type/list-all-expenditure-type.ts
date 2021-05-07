export interface ListAllExpenditureTypeRepository {
  findAll(): ListAllExpenditureTypeRepository.Result;
}

export namespace ListAllExpenditureTypeRepository {
  export type Types = {
    id: number;
    type: string;
    createdAt: string;
  };

  export type Result = Promise<Types[]>;
}
