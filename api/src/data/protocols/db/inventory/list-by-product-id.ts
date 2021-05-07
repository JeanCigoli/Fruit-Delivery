export interface ListInventoryByProductRepository {
  findByProduct(productId: number): ListInventoryByProductRepository.Result;
}

export namespace ListInventoryByProductRepository {
  export type Result = Promise<{
    productId: number;
    quantity: number;
  }>;
}
