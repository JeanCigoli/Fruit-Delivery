export interface AddCompanyRepository {
  create(company: AddCompanyRepository.Params): AddCompanyRepository.Result;
}

export namespace AddCompanyRepository {
  export type Params = {
    name: string;
    document: string;
    login: string;
    password: string;
  };

  export type Result = Promise<number[]>;
}
