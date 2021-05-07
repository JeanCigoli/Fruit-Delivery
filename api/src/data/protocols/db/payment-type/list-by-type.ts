export interface ListPaymentByTypeRepository {
  findByType(type: string): ListPaymentByTypeRepository.Result;
}

export namespace ListPaymentByTypeRepository {
  export type Result = Promise<{
    id: number;
    type: string;
  } | null>;
}
