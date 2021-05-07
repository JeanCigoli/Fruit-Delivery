export interface AddProductsRepository {
  create(params: AddProductsRepository.Params): AddProductsRepository.Result;
}

export namespace AddProductsRepository {
  export type Product = {
    name: string;
    valueBuy: number;
    valueSale: number;
    image: string;
    productType: number;
    productUnit: number;
  };

  export type Params = Product;

  export type Result = Promise<number[]>;
}
