/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(dto: AuthDto): Promise<any> {
    const userName = dto.email;
    const user = await this.authService.signIn(dto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
