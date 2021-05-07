export interface AddTypeProduct {
  add(params: AddTypeProduct.Params): Promise<AddTypeProduct.Result>;
}

export namespace AddTypeProduct {
  export type Params = {
    type: string;
  };

  export type Result = {
    id: number;
    type: string;
  };
}
