/* eslint-disable prettier/prettier */
import { Body, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto): Promise<Tokens> {
    console.log(dto);
    return this.authService.signup(dto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  signIn(@Request() req, @Body() user: AuthDto): any {
    return req.session;
  }
}
