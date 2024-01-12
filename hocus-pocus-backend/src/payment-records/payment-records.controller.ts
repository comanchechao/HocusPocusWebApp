import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentRecordsService } from './payment-records.service';
import { PaymentRecordsDto } from './dto/PaymentRecordsDto';

@Controller('payment-records')
export class PaymentRecordsController {
  constructor(private readonly paymentRecordsServices: PaymentRecordsService) {}

  @Post('/addrecord')
  addrecord(@Body() dto: PaymentRecordsDto) {
    return this.paymentRecordsServices.addRecord(dto);
  }

  @Get('/management/getrecords')
  getRecords() {
    return this.paymentRecordsServices.getRecords();
  }
}
