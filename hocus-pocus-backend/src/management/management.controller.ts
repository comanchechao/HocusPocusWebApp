import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/common/decorators/Role.decorator';
import { LocalAuthGuard } from 'src/auth/common/guards/local.guard';
import { RolesGuard } from 'src/auth/common/guards/roleBased.guard';

@Controller('management')
export class ManagementController {
  @Roles('ADMIN')
  @Get('/products')
  getProducts() {
    return { msg: 'see all products' };
  }
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Get('/orders')
  getOrders() {
    return { msg: 'see all orders' };
  }
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('/addProduct')
  addProduct() {
    return { msg: 'adding new product' };
  }
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('/updateProduct')
  updateProduct() {
    return { msg: 'here we will update some things' };
  }
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('/updateOrderState')
  updateOrderState() {
    return { msg: 'update order state sent or delivered or canceled' };
  }
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Get('info')
  gettingDesiredInfo() {
    return { msg: 'return desired info from database' };
  }
}
