export interface ListCompanyByIdRepository {
  findById(id: number): ListCompanyByIdRepository.Result;
}

export namespace ListCompanyByIdRepository {
  export type Result = Promise<{
    id: number;
    name: string;
    login: string;
    password: string;
  }>;
}
