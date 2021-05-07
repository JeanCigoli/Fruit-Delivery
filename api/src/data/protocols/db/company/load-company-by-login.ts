export interface LoadCompanyByLoginRepository {
  loadByLogin(login: string): LoadCompanyByLoginRepository.Result;
}

export namespace LoadCompanyByLoginRepository {
  export type Result = Promise<{
    id: number;
    name: string;
    login: string;
    password: string;
  }>;
}
