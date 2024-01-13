import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaymentRecordsDto } from './dto/PaymentRecordsDto';

@Injectable()
export class PaymentRecordsService {
  constructor(private readonly prismaService: PrismaService) {}

  async addRecord(dto: PaymentRecordsDto) {
    const record = await this.prismaService.paymentRecords.create({
      data: {
        amount: dto.amount,
        user_id: Number(dto.userId),
        status: dto.status,
        phone_number: dto.phone_number,
        order_id: Number(dto.orderId),
        authority: dto.authority,
      },
    });
  }

  async updateOrder(id: string) {
    const order = await this.prismaService.orders.update({
      where: {
        id: Number(id),
      },
      data: {
        payment: true,
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
