import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersDto } from './dto/OrdersDto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('/submit')
  submitOrder(@Body() dto: OrdersDto) {
    return this.ordersService.submitOrder(dto);
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(id);
  }

  @Post('/draft')
  submitDraft() {
    return this.ordersService.submitDraft();
  }
}
