export interface ListCitiesByStateRepository {
  findByStateId(state: number): ListCitiesByStateRepository.Result;
}

export namespace ListCitiesByStateRepository {
  export type Result = Promise<
    {
      id: number;
      name: string;
    }[]
  >;
}
