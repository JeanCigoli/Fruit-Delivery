export interface AddPurchaseRepository {
  create(params: AddPurchaseRepository.Params): AddPurchaseRepository.Result;
}

export namespace AddPurchaseRepository {
  export type Params = {
    name: string;
    value: number;
    companyId: number;
    freightValue: number;
    paymentType: number;
  };

  export type Result = Promise<number[]>;
}
