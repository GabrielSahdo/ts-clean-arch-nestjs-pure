import { CoreResponse } from 'src/common/DTOs/coreResponse';
import { PaymentGateway } from '../gateways/payment.gateway';
import { Payment } from '../entities/payment.entity';
import { ResourceNotFoundException } from 'src/common/exceptions/resourceNotFoundException';

export class GetPaymentUseCase {
  constructor(private paymentGateway: PaymentGateway) {}

  async execute(paymentId: string): Promise<CoreResponse<Payment>> {
    const [error, payment] = await this.paymentGateway.getPayment(paymentId);
    if (error) return [error, undefined];

    if (!payment) {
      return [
        new ResourceNotFoundException(`Payment with ID ${paymentId} not found`),
        undefined,
      ];
    }

    return [undefined, payment];
  }
}
