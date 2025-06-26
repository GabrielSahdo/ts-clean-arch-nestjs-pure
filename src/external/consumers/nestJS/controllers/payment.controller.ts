import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { DataSource } from 'src/common/dataSources/dataSource.interface';
import { ResourceNotFoundException } from 'src/common/exceptions/resourceNotFoundException';
import { PaymentController } from 'src/core/payments/controllers/payment.controller';
import { DataSourceProxy } from 'src/external/dataSources/dataSourceProxy';
import { InMemoryGeneralDataSource } from 'src/external/dataSources/general/inMemoryGeneralDataSource';
import { FakePaymentDataSource } from 'src/external/dataSources/payment/fakePaymentDataSource';

@Controller('payment')
export class PaymentHttpController {
  dataSource: DataSource;
  paymentCoreController: PaymentController;

  constructor() {
    this.dataSource = new DataSourceProxy(
      new InMemoryGeneralDataSource(),
      new FakePaymentDataSource(),
    );

    this.paymentCoreController = new PaymentController(this.dataSource);
  }

  @Get(':id')
  async getPayment(@Param('id') id: string) {
    const [err, dto] = await this.paymentCoreController.getPayment(id);

    if (err) {
      if (err.code === ResourceNotFoundException.CODE) {
        throw new NotFoundException(err.message);
      }

      console.error('Error getting payment:', err);
      throw new InternalServerErrorException();
    }

    return dto;
  }
}
