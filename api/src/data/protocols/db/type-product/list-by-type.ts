export interface ListTypeProductByTypeRepository {
  findByType(type: string): ListTypeProductByTypeRepository.Result;
}

export namespace ListTypeProductByTypeRepository {
  export type Result = Promise<{
    id: number;
    type: string;
  } | null>;
}
