export interface Authentication {
  auth: (params: Authentication.Params) => Authentication.Result;
}

export namespace Authentication {
  export type Params = {
    login: string;
    password: string;
  };

  export type Result = Promise<{
    accessToken: string;
    name: string;
  }>;
}
