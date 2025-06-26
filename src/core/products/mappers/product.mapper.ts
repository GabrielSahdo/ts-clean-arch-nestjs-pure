import { ProductDatasourceDTO } from 'src/common/dataSources/DTOs/productDatasource.dto';
import { Product } from '../entities/product.entity';

export class ProductMapper {
  static toDto(product: Product): ProductDatasourceDTO {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
  }

  static toEntity(productDto: ProductDatasourceDTO): Product {
    return Product.restore(
      productDto.id,
      productDto.name,
      productDto.price,
      productDto.quantity,
    );
  }
}
