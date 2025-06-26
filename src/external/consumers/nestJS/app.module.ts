import { Module } from '@nestjs/common';
import { ProductHttpController } from './controllers/product.controller';
import { PaymentHttpController } from './controllers/payment.controller';

@Module({
  imports: [],
  controllers: [ProductHttpController, PaymentHttpController],
  providers: [],
})
export class AppModule {}
