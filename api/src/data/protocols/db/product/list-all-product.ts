export interface ListAllProductsRepository {
  findAll(
    params: ListAllProductsRepository.Params,
  ): ListAllProductsRepository.Result;
}

export namespace ListAllProductsRepository {
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
    offset: number;
    limit: number;
  };

  export type Result = Promise<Types[]>;
}
