export interface ListAllTypeProductRepository {
  findAll(): ListAllTypeProductRepository.Result;
}

export namespace ListAllTypeProductRepository {
  export type Types = {
    id: number;
    type: string;
    createdAt: string;
  };

  export type Result = Promise<Types[]>;
}
