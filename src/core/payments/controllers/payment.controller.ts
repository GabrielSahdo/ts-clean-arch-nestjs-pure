import { CoreResponse } from 'src/common/DTOs/coreResponse';
import { DataSource } from '../../../common/dataSources/dataSource.interface';
import { GetPaymentUseCase } from '../useCases/getPayment.useCase';
import { PaymentGateway } from '../gateways/payment.gateway';
import { PaymentPresenter } from '../presenters/payment.presenter';
import { PaymentDto } from '../DTOs/payment.dto';

export class PaymentController {
  constructor(private dataSource: DataSource) {}

  async getPayment(paymentId: string): Promise<CoreResponse<PaymentDto>> {
    const gateway = new PaymentGateway(this.dataSource);
    const useCase = new GetPaymentUseCase(gateway);

    const [err, payment] = await useCase.execute(paymentId);

    if (err) {
      return [err, undefined];
    }

    return [undefined, PaymentPresenter.toDto(payment)];
  }
}
