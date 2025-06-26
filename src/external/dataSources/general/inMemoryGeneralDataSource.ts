import { ProductDatasourceDTO } from 'src/common/dataSources/DTOs/productDatasource.dto';
import { GeneralDataSource } from './generalDataSource.interface';

export class InMemoryGeneralDataSource implements GeneralDataSource {
  private products: Map<string, ProductDatasourceDTO> = new Map();

  createProduct(product: ProductDatasourceDTO): Promise<void> {
    this.products.set(product.id, product);
    return Promise.resolve();
  }

  findProductById(productId: string): Promise<ProductDatasourceDTO | null> {
    return Promise.resolve(this.products.get(productId) || null);
  }
}
