export interface AddInventoryRepository {
  create(
    inventory: AddInventoryRepository.Params,
  ): AddInventoryRepository.Result;
}

export namespace AddInventoryRepository {
  export type Params = {
    productId: number;
    quantity: number;
  };

  export type Result = Promise<number[]>;
}
