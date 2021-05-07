export interface ListAllTypeProduct {
  list(): ListAllTypeProduct.Result;
}

export namespace ListAllTypeProduct {
  type Types = {
    id: number;
    type: string;
    createdAt: string;
  };

  export type Result = Promise<Types[]>;
}
