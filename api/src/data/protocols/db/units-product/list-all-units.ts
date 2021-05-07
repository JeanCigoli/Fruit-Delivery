export interface ListAllUnitsProductRepository {
  findAll(): ListAllUnitsProductRepository.Result;
}

export namespace ListAllUnitsProductRepository {
  export type Types = {
    id: number;
    unit: string;
    unitAbbreviation: string;
  };

  export type Result = Promise<Types[]>;
}
