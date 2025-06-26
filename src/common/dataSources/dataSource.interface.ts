import { PaymentDatasourceDto } from './DTOs/paymentDatasource.dto';
import { ProductDatasourceDTO } from './DTOs/productDatasource.dto';

export interface DataSource {
  getPayment(paymentId: string): Promise<PaymentDatasourceDto | null>;
  createProduct(product: ProductDatasourceDTO): Promise<void>;
  findProductById(productId: string): Promise<ProductDatasourceDTO | null>;
}
