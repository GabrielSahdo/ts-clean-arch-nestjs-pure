import { DataSource } from '../../../common/dataSource.interface';
import { Product } from '../entities/product.entity';

export class ProductGateway {
  constructor(private dataSource: DataSource) {}

  async create(product: Product): Promise<void> {
    await this.dataSource.createProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
  }

  async findById(productId: string): Promise<Product | null> {
    const productDTO = await this.dataSource.findProductById(productId);

    if (!productDTO) {
      return null;
    }

    const product = Product.restore(
      productDTO.id,
      productDTO.name,
      productDTO.price,
      productDTO.quantity,
    );

    return product;
  }
}
