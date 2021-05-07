export interface AddClient {
  add(params: AddClient.Params): Promise<AddClient.Result>;
}

export namespace AddClient {
  export type Address = {
    id: number;
    street: string;
    neighborhood: string;
    zipCode: string;
    number: string;
    complement: string;
    city: number;
  };

  export type Params = {
    name: string;
    document: string;
    phone: string;
    address: Omit<Address, 'id'>;
  };

  export type Result = {
    id: number;
    name: string;
    document: string;
    phone: string;
    address: Address;
  };
}
