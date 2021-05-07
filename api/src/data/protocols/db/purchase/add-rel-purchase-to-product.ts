export interface AddRelPurchaseToProductRepository {
  bulkCreate(
    params: AddRelPurchaseToProductRepository.Params,
  ): AddRelPurchaseToProductRepository.Result;
}

export namespace AddRelPurchaseToProductRepository {
  export type Params = {
    quantity: number;
    productId: number;
    purchaseId: number;
  }[];

  export type Result = Promise<number[]>;
}
