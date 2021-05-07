export interface ListStatesRepository {
  findAll(): ListStatesRepository.Result;
}

export namespace ListStatesRepository {
  export type Result = Promise<
    {
      id: number;
      name: string;
      uf: string;
    }[]
  >;
}
