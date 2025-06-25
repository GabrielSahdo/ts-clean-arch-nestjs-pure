import { ProductDto } from '../DTOs/product.dto';
import { Product } from '../entities/product.entity';

export class ProductPresenter {
  static toDto(product: Product): ProductDto {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
  }
}
