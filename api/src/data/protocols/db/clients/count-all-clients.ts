export interface CountAllClientsRepository {
  countAll(): CountAllClientsRepository.Result;
}

export namespace CountAllClientsRepository {
  export type Result = Promise<{ total: number }[]>;
}
