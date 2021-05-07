export interface UpdateInventoryRepository {
  update(
    inventory: UpdateInventoryRepository.Params,
  ): UpdateInventoryRepository.Result;
}

export namespace UpdateInventoryRepository {
  export type Params = {
    productId: number;
    quantity: number;
  };

  export type Result = Promise<number>;
}
