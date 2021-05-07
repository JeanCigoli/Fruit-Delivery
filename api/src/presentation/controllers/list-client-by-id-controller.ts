import { ListClientById } from '../../domain/usecases/list-client-by-id';
import { makeError } from '../../utils';
import { notFound, ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListClientByIdController implements Controller {
  constructor(private readonly clientById: ListClientById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const client = await this.clientById.list(id);

      return ok('Consulta concluída com sucesso', client);
    } catch (error) {
      switch (error.message) {
        case 'CLIENT_NOT_FOUND':
          return notFound(makeError('O cliente não foi encontrado', 'id'));
        default:
          return serverError(error);
      }
    }
  }
}
