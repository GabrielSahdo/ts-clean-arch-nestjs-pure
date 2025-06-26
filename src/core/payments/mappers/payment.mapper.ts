import { PaymentDatasourceDto } from 'src/common/dataSources/DTOs/paymentDatasource.dto';
import { Payment } from '../entities/payment.entity';

export class PaymentMapper {
  static toDto(payment: Payment): PaymentDatasourceDto {
    return {
      id: payment.id,
      paid: payment.paid,
      paidAt: payment.paidAt ? payment.paidAt.toISOString() : null,
    };
  }

  static toEntity(dto: PaymentDatasourceDto): Payment {
    return Payment.restore(
      dto.id,
      dto.paid,
      dto.paidAt ? new Date(dto.paidAt) : null,
    );
  }
}
