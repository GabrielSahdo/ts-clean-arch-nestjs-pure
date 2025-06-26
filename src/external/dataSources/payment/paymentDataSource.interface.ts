import { PaymentDatasourceDto } from 'src/common/dataSources/DTOs/paymentDatasource.dto';

export interface PaymentDataSource {
  getPayment(paymentId: string): Promise<PaymentDatasourceDto | null>;
}
