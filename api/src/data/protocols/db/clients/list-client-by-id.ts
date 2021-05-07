export interface ListClientByIdRepository {
  findById(id: number): ListClientByIdRepository.Result;
}

export namespace ListClientByIdRepository {
  export type Result = Promise<{
    client: {
      id: number;
      name: string;
      document: string;
      phone: string;
      createdAt: Date;
    };
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
