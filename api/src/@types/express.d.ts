interface Token {
  id: string;
  name: string;
}

declare module Express {
  export interface Request {
    token: Token;
  }
}
