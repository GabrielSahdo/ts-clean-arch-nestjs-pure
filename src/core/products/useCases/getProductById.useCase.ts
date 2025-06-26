import { CoreResponse } from 'src/common/coreResponse';
import { Product } from '../entities/product.entity';
import { ProductGateway } from '../gateways/product.gateway';
import { ResourceNotFoundException } from 'src/common/exceptions/resourceNotFoundException';
import { UnexpectedError } from 'src/common/exceptions/unexpectedError';

export class GetProductByIdUseCase {
  constructor(private gateway: ProductGateway) {}

  async execute(productId: string): Promise<CoreResponse<Product>> {
    if (!productId) {
      return [new UnexpectedError('Product ID must be provided'), undefined];
    }

    const [error, product] = await this.gateway.findById(productId);
    if (error) {
      return [error, undefined];
    }

    if (!product) {
      return [
        new ResourceNotFoundException(`Product with ID ${productId} not found`),
        undefined,
      ];
    }

    return [undefined, product];
  }
}
