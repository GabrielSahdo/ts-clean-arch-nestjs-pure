import { PaymentDataSource } from './paymentDataSource.interface';

export class FakePaymentDataSource implements PaymentDataSource {
  checkPaymentStatus(paymentId: string): Promise<boolean> {
    // Simulate a payment status check
    return Promise.resolve(paymentId === 'valid-payment-id');
  }
}
