export interface UpdateProducts {
  update(params: UpdateProducts.Params): UpdateProducts.Result;
}

export namespace UpdateProducts {
  export type Params = {
    id: string;
    name: string;
    valueBuy: number;
    valueSale: number;
    productType: number;
    productUnit: number;
    image?: string;
  };

  export type Result = Promise<{
    id: string;
    name: string;
    valueBuy: number;
    valueSale: number;
    image: string;
    productType: number;
    productUnit: number;
  }>;
}
