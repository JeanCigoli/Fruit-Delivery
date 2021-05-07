export interface ListCompanyByDocumentRepository {
  findByDocument(document: string): ListCompanyByDocumentRepository.Result;
}

export namespace ListCompanyByDocumentRepository {
  export type Result = Promise<{
    id: number;
    name: string;
    document: string;
    login: string;
    password: string;
  }>;
}
