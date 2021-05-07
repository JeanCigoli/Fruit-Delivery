export interface AddRelSaleToProductRepository {
  bulkCreate(
    params: AddRelSaleToProductRepository.Params,
  ): AddRelSaleToProductRepository.Result;
}

export namespace AddRelSaleToProductRepository {
  export type Params = {
    quantity: number;
    productId: number;
    saleId: number;
  }[];

  export type Result = Promise<number[]>;
}
