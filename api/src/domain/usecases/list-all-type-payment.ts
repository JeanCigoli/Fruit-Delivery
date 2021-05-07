export interface ListAllPaymentsType {
  list(): ListAllPaymentsType.Result;
}

export namespace ListAllPaymentsType {
  type Types = {
    id: number;
    type: string;
    createdAt: string;
  };

  export type Result = Promise<Types[]>;
}
