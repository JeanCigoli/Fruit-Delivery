export interface ListAllPaymentTypeRepository {
  findAll(): ListAllPaymentTypeRepository.Result;
}

export namespace ListAllPaymentTypeRepository {
  export type Types = {
    id: number;
    type: string;
    createdAt: string;
  };

  export type Result = Promise<Types[]>;
}
