export interface ListExpenditureTypeByIdRepository {
  findById(id: number): ListExpenditureTypeByIdRepository.Result;
}

export namespace ListExpenditureTypeByIdRepository {
  export type Result = Promise<{
    id: number;
    type: string;
  } | null>;
}
