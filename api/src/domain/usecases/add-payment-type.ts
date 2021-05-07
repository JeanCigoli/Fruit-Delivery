export interface AddPaymentType {
  add(params: AddPaymentType.Params): AddPaymentType.Result;
}

export namespace AddPaymentType {
  export type Params = {
    type: string;
  };

  export type Result = Promise<{
    id: number;
    type: string;
  }>;
}
