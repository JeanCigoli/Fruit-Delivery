export interface ListAllProducts {
  list(params: ListAllProducts.Params): ListAllProducts.Result;
}

export namespace ListAllProducts {
  type Types = {
    id: number;
    name: string;
    valueBuy: number;
    valueSale: number;
    productType: string;
    productUnit: string;
    createdAt: string;
  };

  export type Params = {
    page: number;
    limit: number;
  };

  export type Result = Promise<{
    data: Types[];
    total: number;
    currentPage: number;
    limitPage: number;
  }>;
}
