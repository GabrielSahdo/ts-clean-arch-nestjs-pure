import { CoreResponse } from 'src/common/DTOs/coreResponse';
import { CreateProductInputDto } from '../DTOs/createProductInput.dto';
import { Product } from '../entities/product.entity';
import { ProductGateway } from '../gateways/product.gateway';

export class CreateProductUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(dto: CreateProductInputDto): Promise<CoreResponse<Product>> {
    const product = Product.create(dto.name, dto.price, dto.quantity);

    const [error] = await this.productGateway.create(product);

    if (error) {
      return [error, undefined];
    }

    return [undefined, product];
  }
}
