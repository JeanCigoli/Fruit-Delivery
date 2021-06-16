import { ListAllClients } from '../../domain/usecases/list-all-clients';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListAllClientsController implements Controller {
  constructor(private readonly allClients: ListAllClients) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { page, limit } = httpRequest.query;

      const clients = await this.allClients.list({ page, limit });

      return ok('Consulta concluída com sucesso', clients);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
