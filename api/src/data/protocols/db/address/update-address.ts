export interface UpdateAddressRepository {
  update(
    address: UpdateAddressRepository.Params,
    id: number,
  ): UpdateAddressRepository.Result;
}

export namespace UpdateAddressRepository {
  export type Params = {
    street: string;
    neighborhood: string;
    zipCode: string;
    number: string;
    complement: string;
    city: number;
  };

  export type Result = Promise<number>;
}
