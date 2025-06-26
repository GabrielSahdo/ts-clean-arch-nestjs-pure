import { ProductDatasourceDTO } from 'src/common/dataSources/DTOs/productDatasource.dto';
import { GeneralDataSource } from './general/generalDataSource.interface';
import { PaymentDataSource } from './payment/paymentDataSource.interface';
import { DataSource } from 'src/common/dataSources/dataSource.interface';
import { PaymentDatasourceDto } from 'src/common/dataSources/DTOs/paymentDatasource.dto';

export class DataSourceProxy implements DataSource {
  private generalDataSource: GeneralDataSource;
  private paymentDataSource: PaymentDataSource;

  constructor(
    generalDataSource: GeneralDataSource,
    paymentDataSource: PaymentDataSource,
  ) {
    this.generalDataSource = generalDataSource;
    this.paymentDataSource = paymentDataSource;
  }
  getPayment(paymentId: string): Promise<PaymentDatasourceDto | null> {
    return this.paymentDataSource.getPayment(paymentId);
  }

  async createProduct(product: ProductDatasourceDTO): Promise<void> {
    await this.generalDataSource.createProduct(product);
  }

  async findProductById(
    productId: string,
  ): Promise<ProductDatasourceDTO | null> {
    return this.generalDataSource.findProductById(productId);
  }
}
