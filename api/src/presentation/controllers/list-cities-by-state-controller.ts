import { ListCitiesByState } from '../../domain/usecases/list-cities-by-state';
import { makeError } from '../../utils';
import { notFound, ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class ListCitiesByStateController implements Controller {
  constructor(private readonly citiesByState: ListCitiesByState) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const cities = await this.citiesByState.list(id);

      return ok('Consulta concluída com sucesso', cities);
    } catch (error) {
      switch (error.message) {
        case 'STATE_NOT_FOUND':
          return notFound(makeError('O estado não foi encontrado', 'id_state'));
        default:
          return serverError(error);
      }
    }
  }
}
