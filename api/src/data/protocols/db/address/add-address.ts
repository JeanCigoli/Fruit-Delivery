export interface AddAddressRepository {
  create(address: AddAddressRepository.Params): AddAddressRepository.Result;
}

export namespace AddAddressRepository {
  export type Params = {
    street: string;
    neighborhood: string;
    zipCode: string;
    number: string;
    complement: string;
    city: number;
  };

  export type Result = Promise<number[]>;
}
