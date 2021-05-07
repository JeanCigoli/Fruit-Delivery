export interface AddSaleRepository {
  create(params: AddSaleRepository.Params): AddSaleRepository.Result;
}

export namespace AddSaleRepository {
  export type Params = {
    value: number;
    clientId: number;
    freightValue: number;
    paymentType: number;
  };

  export type Result = Promise<number[]>;
}
