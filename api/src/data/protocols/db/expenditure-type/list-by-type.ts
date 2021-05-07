export interface ListExpenditureByTypeRepository {
  findByType(type: string): ListExpenditureByTypeRepository.Result;
}

export namespace ListExpenditureByTypeRepository {
  export type Result = Promise<{
    id: number;
    type: string;
  } | null>;
}
