import { CoreResponse } from 'src/common/coreResponse';
import { DataSource } from '../../../common/dataSource.interface';
import { Product } from '../entities/product.entity';
import { UnexpectedError } from 'src/common/exceptions/unexpectedError';

export class ProductGateway {
  constructor(private dataSource: DataSource) {}

  async create(product: Product): Promise<CoreResponse<undefined>> {
    try {
      await this.dataSource.createProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });

      return [undefined, undefined];
    } catch (error) {
      console.error('Error creating product:', error);
      return [new UnexpectedError(`Failed to create product`), undefined];
    }
  }

  async findById(productId: string): Promise<CoreResponse<Product | null>> {
    try {
      const productDTO = await this.dataSource.findProductById(productId);

      if (!productDTO) {
        return [undefined, null];
      }

      const product = Product.restore(
        productDTO.id,
        productDTO.name,
        productDTO.price,
        productDTO.quantity,
      );

      return [undefined, product];
    } catch (error) {
      console.error('Error finding product by ID:', error);
      return [new UnexpectedError(`Failed to find product`), undefined];
    }
  }
}
