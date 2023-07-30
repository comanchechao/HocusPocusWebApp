import { Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('/submit')
  submitOrder() {
    return this.ordersService.submitOrder();
  }

  @Post('/draft')
  submitDraft() {
    return this.ordersService.submitDraft();
  }
}
