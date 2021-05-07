import { ListAllClients } from '../../domain/usecases/list-all-clients';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListAllClientsController implements Controller {
  constructor(private readonly allClients: ListAllClients) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const clients = await this.allClients.list();

      return ok('Consulta concluída com sucesso', clients);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
