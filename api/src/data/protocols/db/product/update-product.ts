export interface UpdateProductsRepository {
  update(
    params: UpdateProductsRepository.Params,
    id: number,
  ): UpdateProductsRepository.Result;
}

export namespace UpdateProductsRepository {
  export type Product = {
    name: string;
    valueBuy: number;
    valueSale: number;
    productType: number;
    productUnit: number;
    image: string;
  };

  export type Params = Product;

  export type Result = Promise<any>;
}
