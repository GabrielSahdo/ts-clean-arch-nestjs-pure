import { CreateProductInputDto } from '../DTOs/createProductInput.dto';
import { Product } from '../entities/product.entity';
import { ProductGateway } from '../gateways/product.gateway';

export class CreateProductUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(dto: CreateProductInputDto): Promise<Product> {
    const product = Product.create(dto.name, dto.price, dto.quantity);

    await this.productGateway.create(product);

    return product;
  }
}
