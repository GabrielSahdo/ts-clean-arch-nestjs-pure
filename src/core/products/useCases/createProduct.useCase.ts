import { CoreResponse } from 'src/common/DTOs/coreResponse';
import { CreateProductInputDto } from '../DTOs/createProductInput.dto';
import { Product } from '../entities/product.entity';
import { ProductGateway } from '../gateways/product.gateway';

export class CreateProductUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(dto: CreateProductInputDto): Promise<CoreResponse<Product>> {
    const [errEntity, product] = Product.create(
      dto.name,
      dto.price,
      dto.quantity,
    );
    if (errEntity) return [errEntity, undefined];

    const [errGateway] = await this.productGateway.create(product);
    if (errGateway) return [errGateway, undefined];

    return [undefined, product];
  }
}
