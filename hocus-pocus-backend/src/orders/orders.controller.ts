import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersDto } from './dto/OrdersDto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('/submit')
  submitOrder(@Body() dto: OrdersDto) {
    return this.ordersService.submitOrder(dto);
  }

  @Post('/draft')
  submitDraft() {
    return this.ordersService.submitDraft();
  }
}
