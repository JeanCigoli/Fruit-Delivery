export interface ListCitiesByState {
  list(id: ListCitiesByState.Params): Promise<ListCitiesByState.Result[]>;
}

export namespace ListCitiesByState {
  export type Params = string;

  export type Result = {
    id: number;
    name: string;
  };
}
