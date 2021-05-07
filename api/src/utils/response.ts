import errorLogger from './error-logger';

export const ok = (message: string, payload: object) => {
  return {
    statusCode: 200,
    body: {
      message,
      payload,
    },
  };
};

export const created = (message: string, payload: object) => {
  return {
    statusCode: 201,
    body: {
      message,
      payload,
    },
  };
};

export const forbidden = (error: Error) => {
  errorLogger(error);
  return {
    statusCode: 403,
    body: {
      message: 'Ops, parece que não está autenticado',
      error: [
        {
          message: 'Ops, parece que não está autenticado',
          param: 'authorization',
        },
      ],
    },
  };
};

export const serverError = (error?: any) => {
  errorLogger(error);
  return {
    statusCode: 500,
    body: {
      message: 'internal server error',
      error: [
        { message: 'Ops, parece que ocorreu um erro em nosso servidores' },
      ],
    },
  };
};

export const conflict = (error?: any[]) => {
  return {
    statusCode: 409,
    body: {
      message: 'conflict',
      error,
    },
  };
};

export const badRequest = (error?: any[]) => {
  return {
    statusCode: 400,
    body: {
      message: 'bad request',
      error,
    },
  };
};

export const notFound = (error?: any[]) => {
  return {
    statusCode: 404,
    body: {
      message: 'not found',
      error,
    },
  };
};
