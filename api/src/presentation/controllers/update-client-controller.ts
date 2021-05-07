import { UpdateClient } from '../../domain/usecases/update-client';
import { makeError } from '../../utils';
import { notFound, serverError, ok } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class UpdateClientController implements Controller {
  constructor(private readonly updateClient: UpdateClient) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const client = await this.updateClient.update({
        id,
        ...httpRequest.body,
      });

      return ok('Cliente atualizado com sucesso', client);
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
