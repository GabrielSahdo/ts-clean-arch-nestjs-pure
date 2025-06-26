import { ProductDatasourceDTO } from 'src/common/dataSources/DTOs/productDatasource.dto';

export interface GeneralDataSource {
  createProduct(product: ProductDatasourceDTO): Promise<void>;
  findProductById(productId: string): Promise<ProductDatasourceDTO | null>;
}
