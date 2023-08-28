import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Session,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { LocalAuthGuard } from 'src/auth/common/guards/local.guard';
import { UserInfoDto } from './dto';
import { AuthenticatedGuards } from 'src/auth/authGuards/authenticated.guards';

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

  @UseGuards(AuthenticatedGuards)
  @Post('submitinfo')
  submitInfo(
    @Body() dto: UserInfoDto,
    @Session() session: Record<string, any>,
  ) {
    return this.userServices.submitInfo(dto, session.passport.user.username);
  }
}
