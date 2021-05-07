export interface CountAllProductsRepository {
  countAll(): CountAllProductsRepository.Result;
}

export namespace CountAllProductsRepository {
  export type Result = Promise<{ total: number }[]>;
}
