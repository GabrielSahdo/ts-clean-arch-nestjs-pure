import { PaymentDto } from '../DTOs/payment.dto';
import { Payment } from '../entities/payment.entity';

export class PaymentPresenter {
  static toDto(payment: Payment): PaymentDto {
    return {
      id: payment.id,
      paid: payment.paid,
      paidAt: payment.paidAt ? payment.paidAt.toISOString() : null,
    };
  }
}
