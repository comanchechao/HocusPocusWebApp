/* eslint-disable prettier/prettier */
import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthGuard } from '@nestjs/passport'; 

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authService.signup(dto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  signIn(@Request() req): any {
    return { User: req.user, msg: 'you are logged' };
  }
}
