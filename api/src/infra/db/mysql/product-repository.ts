import {
  AddProductsRepository,
  ListAllProductsRepository,
  ListProductByNameRepository,
  UpdateProductsRepository,
} from '../../../data/protocols/db';
import { CountAllProductsRepository } from '../../../data/protocols/db/product/count-all-products';
import { ListProductByIdRepository } from '../../../data/protocols/db/product/list-by-id';
import knex from './helpers/connection';

export class ProductRepository
  implements
    AddProductsRepository,
    ListProductByNameRepository,
    ListAllProductsRepository,
    ListProductByIdRepository,
    UpdateProductsRepository,
    CountAllProductsRepository {
  update(
    params: UpdateProductsRepository.Product,
    id: number,
  ): UpdateProductsRepository.Result {
    return knex('tb_product')
      .update({
        name: params.name,
        image: params.image,
        value_buy: params.valueBuy,
        value_sale: params.valueSale,
        id_product_type: params.productType,
        id_product_unit: params.productUnit,
      })
      .where('id_product', id);
  }

  findById(id: number): ListProductByIdRepository.Result {
    return knex('tb_product as prod')
      .innerJoin(
        'tb_product_type as type',
        'type.id_product_type',
        'prod.id_product_type',
      )
      .innerJoin(
        'tb_product_unit as units',
        'units.id_product_unit',
        'prod.id_product_unit',
      )
      .innerJoin(
        'tb_inventory as inventory',
        'inventory.id_product',
        'prod.id_product',
      )
      .select(
        'prod.id_product as id',
        'prod.name',
        'prod.value_buy as valueBuy',
        'prod.value_sale as valueSale',
        'prod.image',
        'prod.created_at as createdAt',
        'type.id_product_type as id',
        'type.type as name',
        'units.id_product_unit as id',
        'units.unit as name',
        'units.unit_abbreviation as abbreviation',
        'inventory.quantity',
      )
      .where('prod.id_product', id)
      .options({ nestTables: true })
      .first();
  }

  create(params: AddProductsRepository.Params): AddProductsRepository.Result {
    return knex('tb_product').insert({
      name: params.name,
      value_buy: params.valueBuy,
      value_sale: params.valueSale,
      image: params.image,
      id_product_type: params.productType,
      id_product_unit: params.productUnit,
    });
  }

  findAll(
    params: ListAllProductsRepository.Params,
  ): ListAllProductsRepository.Result {
    return knex('tb_product as prod')
      .innerJoin(
        'tb_product_type as type',
        'type.id_product_type',
        'prod.id_product_type',
      )
      .innerJoin(
        'tb_product_unit as unit',
        'unit.id_product_unit',
        'prod.id_product_unit',
      )
      .select(
        'prod.id_product as id',
        'prod.name',
        'prod.value_buy as valueBuy',
        'prod.value_sale as valueSale',
        'type.type',
        'unit.unit_abbreviation as unitAbbreviation',
        'prod.created_at as createdAt',
      )
      .orderBy('prod.name', 'asc')
      .offset(params.offset)
      .limit(params.limit);
  }

  countAll(): CountAllProductsRepository.Result {
    return knex('tb_product as prod')
      .innerJoin(
        'tb_product_type as type',
        'type.id_product_type',
        'prod.id_product_type',
      )
      .innerJoin(
        'tb_product_unit as unit',
        'unit.id_product_unit',
        'prod.id_product_unit',
      )
      .count('prod.id_product', { as: 'total' });
  }

  findByName(name: string): ListProductByNameRepository.Result {
    return knex('tb_product')
      .select(
        'id_product as id',
        'name',
        'value_buy as valueBuy',
        'value_sale as valueSale',
        'image',
        'id_product_type as productType',
        'id_product_unit as productUnit',
      )
      .where('name', name)
      .first();
  }
}
