export interface AddProducts {
  add(params: AddProducts.Params): AddProducts.Result;
}

export namespace AddProducts {
  export type Product = {
    id: number;
    name: string;
    valueBuy: number;
    valueSale: number;
    image: string;
    productType: number;
    productUnit: number;
  };

  export type Params = Omit<Product, 'id'>;

  export type Result = Promise<Product>;
}
