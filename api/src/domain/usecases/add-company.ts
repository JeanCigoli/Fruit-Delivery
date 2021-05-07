export interface AddCompany {
  add(params: AddCompany.Params): AddCompany.Result;
}

export namespace AddCompany {
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
    login: string;
    password: string;
    address: Omit<Address, 'id'>;
  };

  export type Result = Promise<{
    id: number;
    name: string;
    document: string;
    login: string;
    password: string;
    address: Address;
  }>;
}
