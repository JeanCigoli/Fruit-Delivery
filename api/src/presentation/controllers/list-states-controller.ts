import { ListState } from '../../domain/usecases/list-states';
import { ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListStatesController implements Controller {
  constructor(private readonly states: ListState) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const states = await this.states.list();

      return ok('Consulta concluída com sucesso', states);
    } catch (error) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
