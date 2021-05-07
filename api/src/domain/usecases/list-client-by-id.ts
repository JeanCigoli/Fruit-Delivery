export interface ListClientById {
  list(id: string): ListClientById.Result;
}

export namespace ListClientById {
  export type Result = Promise<{
    id: number;
    name: string;
    document: string;
    phone: string;
    createdAt: Date;
    address: {
      id: number;
      street: string;
      neighborhood: string;
      zipCode: string;
      number: string;
      complement: string;
      city: number;
      state: number;
    };
  }>;
}
