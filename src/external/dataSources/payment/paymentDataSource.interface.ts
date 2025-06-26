export interface PaymentDataSource {
  checkPaymentStatus(paymentId: string): Promise<boolean>;
}
