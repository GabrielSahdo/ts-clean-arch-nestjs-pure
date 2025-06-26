import { ProductDatasourceDTO } from 'src/common/dataSources/DTOs/productDatasource.dto';
import { GeneralDataSource } from './general/generalDataSource.interface';
import { PaymentDataSource } from './payment/paymentDataSource.interface';

export class DataSourceProxy implements GeneralDataSource, PaymentDataSource {
  private generalDataSource: GeneralDataSource;
  private paymentDataSource: PaymentDataSource;

  constructor(
    generalDataSource: GeneralDataSource,
    paymentDataSource: PaymentDataSource,
  ) {
    this.generalDataSource = generalDataSource;
    this.paymentDataSource = paymentDataSource;
  }

  async createProduct(product: ProductDatasourceDTO): Promise<void> {
    await this.generalDataSource.createProduct(product);
  }

  async findProductById(
    productId: string,
  ): Promise<ProductDatasourceDTO | null> {
    return this.generalDataSource.findProductById(productId);
  }

  async checkPaymentStatus(paymentId: string): Promise<boolean> {
    return this.paymentDataSource.checkPaymentStatus(paymentId);
  }
}
