import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentRecordsDto } from './dto/PaymentRecordsDto';

@Injectable()
export class PaymentRecordsService {
  constructor(private readonly prismaService: PrismaService) {}

  async addRecord(body: any, authCode: string) {
    console.log(body);
    const record = await this.prismaService.paymentRecords.create({
      data: {
        amount: body.amount,
        user_id: Number(body.userId),
        status: 'not paid',
        phone_number: body.phoneNumber,
        order_id: Number(body.orderId),
        authority: authCode,
      },
    });
  }

  async updateOrder(auth: string) {
    const order = await this.prismaService.orders.update({
      where: {
        authority: auth,
      },
      data: {
        payment: true,
      },
    });
  }

  async updateAuth(auth: string, orderId: string) {
    const order = await this.prismaService.orders.update({
      where: {
        id: Number(orderId),
      },
      data: {
        authority: auth,
      },
    });
  }

  async getRecords() {
    const records = await this.prismaService.paymentRecords.findMany({});

    return {
      records: records,
    };
  }
}
