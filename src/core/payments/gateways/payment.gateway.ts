import { CoreResponse } from 'src/common/DTOs/coreResponse';
import { DataSource } from '../../../common/dataSources/dataSource.interface';
import { UnexpectedError } from 'src/common/exceptions/unexpectedError';
import { Payment } from '../entities/payment.entity';
import { PaymentMapper } from '../mappers/payment.mapper';

export class PaymentGateway {
  constructor(private dataSource: DataSource) {}

  async getPayment(paymentId: string): Promise<CoreResponse<Payment | null>> {
    try {
      const paymentDTO = await this.dataSource.getPayment(paymentId);

      if (!paymentDTO) return [undefined, null];

      const [mapperErr, payment] = PaymentMapper.toEntity(paymentDTO);
      if (mapperErr) return [mapperErr, undefined];

      return [undefined, payment];
    } catch (error) {
      console.error('Error getting payment:', error);
      return [new UnexpectedError(`Failed to get payment`), undefined];
    }
  }
}
