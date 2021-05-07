export interface ListProductByNameRepository {
  findByName(name: string): ListProductByNameRepository.Result;
}

export namespace ListProductByNameRepository {
  export type Product = {
    id: number;
    name: string;
    valueBuy: number;
    valueSale: number;
    image: string;
    productType: string;
    productUnit: string;
    createdAt: string;
  };

  export type Result = Promise<Product>;
}
