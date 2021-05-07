export interface AddSale {
  create(params: AddSale.Params): AddSale.Result;
}

export namespace AddSale {
  export type Params = {
    paymentType: number;
    clientId: number;
    freightValue: number;
    products: Array<{
      id: number;
      quantity: number;
    }>;
  };

  export type Result = Promise<{
    id: number;
    value: string;
  }>;
}
