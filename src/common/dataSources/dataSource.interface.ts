import { ProductDatasourceDTO } from './DTOs/productDatasource.dto';

export interface DataSource {
  checkPaymentStatus(paymentId: string): Promise<boolean>;
  createProduct(product: ProductDatasourceDTO): Promise<void>;
  findProductById(productId: string): Promise<ProductDatasourceDTO | null>;
}
