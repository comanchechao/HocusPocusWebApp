import { Injectable } from '@nestjs/common';
import { OrdersDto } from './dto/OrdersDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderItemsDto } from './dto/OrderItemsDto';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService) {}

  async submitOrder(dto: OrdersDto) {
    const order = await this.prismaService.orders.create({
      data: {
        totalPrice: dto.totalPrice,
        estimatedDeliveryDays: dto.estimatedDeliveryDays,
        adderss: dto.address,
        region: dto.region,
        city: dto.city,
        fullname: dto.fullname,
        postal_code: dto.postal_code,
        phone_number: dto.phone_number,
        user_id: 2,
      },
    });

    return { order: order };
  }

  submitDraft() {
    return { msg: 'drafted' };
  }

  async getOrderById(id: string) {
    const order = await this.prismaService.orderItems.findUnique({
      where: {
        id: Number(id),
      },
    });

    return { order: order };
  }

  async submitItems(dto: OrderItemsDto) {
    const orderItems = await this.prismaService.orderItems.create({
      data: {
        items: dto.items,
        order_id: Number(dto.order_id),
      },
    });
  }
}
