export interface ListProductByIdRepository {
  findById(id: number): ListProductByIdRepository.Result;
}

export namespace ListProductByIdRepository {
  export type Result = Promise<{
    prod: {
      id: number;
      name: string;
      valueBuy: number;
      valueSale: number;
      image: string;
      createdAt: string;
    };
    units: {
      id: number;
      name: string;
      abbreviation: string;
    };
    type: {
      id: number;
      name: string;
    };
    inventory: {
      quantity: number;
    };
  }>;
}
