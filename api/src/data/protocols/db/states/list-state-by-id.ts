export interface ListStatesByIdRepository {
  findById(id: number): ListStatesByIdRepository.Result;
}

export namespace ListStatesByIdRepository {
  export type Result = Promise<{
    id: number;
    name: string;
    uf: string;
  } | null>;
}
