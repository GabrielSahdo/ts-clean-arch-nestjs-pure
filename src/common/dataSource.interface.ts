import { ProductDatasourceDTO } from './DTOs/productDatasource.dto';

export interface DataSource {
  createProduct(product: ProductDatasourceDTO): Promise<void>;
  findProductById(productId: string): Promise<ProductDatasourceDTO | null>;
}
