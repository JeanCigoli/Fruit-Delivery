export interface ListAllUnitsProduct {
  list(): ListAllUnitsProduct.Result;
}

export namespace ListAllUnitsProduct {
  type Types = {
    id: number;
    unit: string;
    unitAbbreviation: string;
  };

  export type Result = Promise<Types[]>;
}
