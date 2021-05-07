import { AddProducts } from '../../domain/usecases/add-products';
import { makeError } from '../../utils';
import { conflict, created, serverError } from '../../utils/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class AddProductsController implements Controller {
  constructor(private readonly addProduct: AddProducts) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        name,
        valueBuy,
        valueSale,
        productType,
        productUnit,
      } = httpRequest.body;
      const { filename } = httpRequest.file as Express.Multer.File;

      const product = await this.addProduct.add({
        name,
        valueBuy,
        valueSale,
        productType,
        productUnit,
        image: filename,
      });

      return created('O produto foi cadastrado com sucesso', product);
    } catch (error) {
      switch (error.message) {
        case 'PRODUCT_EXIST':
          return conflict(
            makeError('Este produto já se encontra cadastrado', 'name'),
          );
        default:
          return serverError(error);
      }
    }
  }
}
