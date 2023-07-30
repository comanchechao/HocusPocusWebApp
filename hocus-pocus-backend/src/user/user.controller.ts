import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe() {
    return 'info';
  }

  @Get('/orders')
  getOrders() {
    return this.userServices.getOrders();
  }
}
