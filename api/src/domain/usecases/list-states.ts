export interface ListState {
  list(): Promise<ListState.Result[]>;
}

export namespace ListState {
  export type Result = {
    id: number;
    name: string;
    uf: string;
  };
}
