import { UpdateProducts } from '../../domain/usecases/update-product';
import { makeError } from '../../utils';
import { notFound, ok, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class UpdateProductsController implements Controller {
  constructor(private readonly updateProduct: UpdateProducts) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        name,
        valueBuy,
        valueSale,
        productType,
        productUnit,
      } = httpRequest.body;
      const { id } = httpRequest.params;
      const filename = httpRequest.file?.filename;

      const product = await this.updateProduct.update({
        id,
        name,
        valueBuy,
        valueSale,
        productType,
        productUnit,
        image: filename,
      });

      return ok('O produto foi atualizado com sucesso', product);
    } catch (error) {
      switch (error.message) {
        case 'PRODUCT_NOT_FOUND':
          return notFound(makeError('id', 'O produto não foi encontrado!'));
        default:
          return serverError(error);
      }
    }
  }
}
