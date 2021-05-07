export interface AddPurchase {
  create(params: AddPurchase.Params): AddPurchase.Result;
}

export namespace AddPurchase {
  export type Params = {
    name: string;
    paymentType: number;
    companyId: number;
    freightValue: number;
    products: Array<{
      id: number;
      quantity: number;
    }>;
  };

  export type Result = Promise<{
    id: number;
    name: string;
    value: string;
  }>;
}
