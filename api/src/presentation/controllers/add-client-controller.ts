import { AddClient } from '../../domain/usecases/add-client';
import { makeError } from '../../utils';
import { conflict, created, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddClientController implements Controller {
  constructor(private readonly addClient: AddClient) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const client = await this.addClient.add(httpRequest.body);

      return created('Cliente cadastrado com sucesso', client);
    } catch (error) {
      switch (error.message) {
        case 'CLIENT_EXIST':
          return conflict(
            makeError('O cliente já se encontra cadastrado', 'document'),
          );
        default:
          return serverError(error);
      }
    }
  }
}
