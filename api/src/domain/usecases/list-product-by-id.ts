export interface ListProductById {
  list(id: string): ListProductById.Result;
}

export namespace ListProductById {
  export type Result = Promise<{
    id: number;
    name: string;
    valueBuy: number;
    valueSale: number;
    image: string;
    createdAt: string;
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
