export interface ListClientByDocumentRepository {
  findByDocument(document: string): ListClientByDocumentRepository.Result;
}

export namespace ListClientByDocumentRepository {
  export type Result = Promise<{
    id: number;
    name: string;
    document: string;
  }>;
}
