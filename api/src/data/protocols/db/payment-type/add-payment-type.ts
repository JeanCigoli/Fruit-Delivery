export interface AddPaymentTypeRepository {
  create(
    payment: AddPaymentTypeRepository.Params,
  ): AddPaymentTypeRepository.Result;
}

export namespace AddPaymentTypeRepository {
  export type Params = {
    type: string;
  };

  export type Result = Promise<number[]>;
}
