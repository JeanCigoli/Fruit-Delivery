export interface UpdateClient {
  update(params: UpdateClient.Params): Promise<UpdateClient.Result>;
}

export namespace UpdateClient {
  export type Address = {
    street: string;
    neighborhood: string;
    zipCode: string;
    number: string;
    complement: string;
    city: number;
  };

  export type Params = {
    id: string;
    name: string;
    document: string;
    phone: string;
    address: Address;
  };

  export type Result = {
    id: number;
    name: string;
    document: string;
    phone: string;
    address: Address;
  };
}
