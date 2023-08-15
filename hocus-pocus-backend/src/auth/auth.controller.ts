/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Request,
  Post,
  UseGuards,
  Res,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Tokens } from './types';
import { AtGuard } from './common/guards';
import { GetCurrentUser } from './common/decorators';
import { LocalAuthGuard } from './common/guards/local.guard';
import { Response } from 'express';
import { RolesGuard } from './common/guards/roleBased.guard';
import { Roles } from './common/decorators/Role.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authService.signup(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signIn(@Res({ passthrough: true }) res: Response, @Body() dto: AuthDto) {
    return {
      msg: 'User logged in',
    };
  }

  @UseGuards(AtGuard)
  @Post('logout')
  logout(@GetCurrentUser('sub') userId: number) {
    return this.authService.logout(userId);
  }

  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Get('/getme')
  getMe() {
    return { msg: 'you should see this now' };
  }
}
