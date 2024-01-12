import { Module } from '@nestjs/common';
import { PaymentRecordsService } from './payment-records.service';
import { PaymentRecordsController } from './payment-records.controller';

@Module({
  providers: [PaymentRecordsService],
  controllers: [PaymentRecordsController]
})
export class PaymentRecordsModule {}
