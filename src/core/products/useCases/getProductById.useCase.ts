import { Product } from '../entities/product.entity';
import { ProductGateway } from '../gateways/product.gateway';

export class GetProductByIdUseCase {
  constructor(private gateway: ProductGateway) {}

  async execute(productId: string): Promise<Product> {
    if (!productId) {
      throw new Error('Product ID is required');
    }

    const product = await this.gateway.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }
}
