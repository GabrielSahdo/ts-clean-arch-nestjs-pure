import { DataSource } from '../../common/dataSource.interface';
import { ProductDatasourceDTO } from '../../common/DTOs/productDatasource.dto';

export class InMemoryDataSource implements DataSource {
  private data: Map<string, ProductDatasourceDTO> = new Map();

  createProduct(product: ProductDatasourceDTO): Promise<void> {
    this.data.set(product.id, product);
    return Promise.resolve();
  }

  findProductById(productId: string): Promise<ProductDatasourceDTO | null> {
    const product = this.data.get(productId) || null;
    return Promise.resolve(product);
  }
}
