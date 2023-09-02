import { Injectable } from '@nestjs/common';
import { OrdersDto } from './dto/OrdersDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  async submitOrder(dto: OrdersDto) {
    const order = await this.prismaService.orders.create({
      data: {
        owner: 'me',
        totalPrice: Number(dto.totalPrice),
        estimatedDeliveryDays: dto.estimatedDeliveryDays,
        adderss: dto.address,
        postal_code: dto.postal_code,
        phone_number: dto.phone_number,
        user_id: 2,
      },
    });
  }

  submitDraft() {
    return { msg: 'drafted' };
  }
}
