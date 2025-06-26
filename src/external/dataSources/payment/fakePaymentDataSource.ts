import { PaymentDatasourceDto } from 'src/common/dataSources/DTOs/paymentDatasource.dto';
import { PaymentDataSource } from './paymentDataSource.interface';

export class FakePaymentDataSource implements PaymentDataSource {
  getPayment(paymentId: string): Promise<PaymentDatasourceDto | null> {
    return Promise.resolve({
      id: paymentId,
      paid: true,
      paidAt: new Date().toISOString(),
    });
  }
}
