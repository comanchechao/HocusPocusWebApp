import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { PaymentRecordsService } from './payment-records.service';
import { PaymentRecordsDto } from './dto/PaymentRecordsDto';
import { Response } from 'express';
import axios from 'axios';
import { GatewayInfoDto } from './dto/GatewayInfoDto';

@Controller('payment-records')
export class PaymentRecordsController {
  constructor(private readonly paymentRecordsServices: PaymentRecordsService) {}

  @Post('/togateway')
  async makePaymentRequest(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: GatewayInfoDto,
  ) {
    const data = JSON.stringify({
      merchant_id: process.env.MERCHANT_ID,
      amount: dto.amount,
      callback_url: 'https://hocuspocusmagicstore.com/',
      description: 'Transaction description.',
      metadata: {
        mobile: dto.phone_number,
        email: dto.email,
      },
    });

    const config = {
      url: 'https://api.zarinpal.com/pg/v4/payment/request.json',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(response.data);
      // const url = `https://www.zarinpal.com/pg/StartPay/${response.data.data.authority}`;
      res.json(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  @Post('/addrecord')
  addrecord(@Body() dto: PaymentRecordsDto) {
    return this.paymentRecordsServices.addRecord(dto);
  }

  @Post('/updateorder')
  updateOrder(@Param('id') id: string) {
    return this.paymentRecordsServices.updateOrder(id);
  }

  @Get('/management/getrecords')
  getRecords() {
    return this.paymentRecordsServices.getRecords();
  }
}
