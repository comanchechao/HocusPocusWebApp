/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Request,
  Post,
  UseGuards,
  Res,
  Get,
  Session,
  Req,
  Redirect,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import axios, { AxiosResponse } from 'axios';
import { LocalAuthGuard } from './common/guards/local.guard';
import { Response, response } from 'express';
import { RolesGuard } from './common/guards/roleBased.guard';
import { Roles } from './common/decorators/Role.decorator';
import { AuthenticatedGuard } from './authGuards/authenticated.guards';
import { RecoveryDto } from './dto/RecoveryDto';
import { RedirectInterceptor } from './interceptors/RedirectInterceptor';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private httpService: HttpService,
  ) {}

  @Post('/payment')
  async makePaymentRequest(@Res({ passthrough: true }) res: Response) {
    const data = JSON.stringify({
      merchant_id: process.env.MERCHANT_ID,
      amount: '20100',
      callback_url: 'https://hocuspocusmagicstore.com/',
      description: 'Transaction description.',
      metadata: {
        mobile: '09106869409',
        email: 'info.test@gmail.com',
      },
    });

    const config = {
      url: 'https://api.zarinpal.com/pg/v4/payment/request.json',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/togateway/:authority')
  @Redirect('https://hocuspocusmagicstore.com')
  async toPaymentGateway(
    @Param('authority') authority: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    // console.log(authorityNum);
    // try {
    //   const response = await axios.get(
    //     `https://www.zarinpal.com/pg/StartPay/ . $result['data'][${authorityNum}]`,
    //   );
    //   const authority = response.data[authorityNum];

    //   // Use the authority value as needed
    // } catch (error) {
    //   console.error(error);
    // }

    const url = `https://www.zarinpal.com/pg/StartPay/${authority}`;

    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    // const response = await this.httpService.get(url).toPromise();
    res.redirect('https://hocuspocusmagicstore.com');
  }

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signIn(@Res({ passthrough: true }) res: Response, @Body() dto: AuthDto) {
    return {
      msg: 'User logged in',
    };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/isauthenticated')
  getProfile(@Session() session: Record<string, any>) {
    return this.authService.isAuthenticated(session.passport.user.username);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/isauth')
  getUser(@Session() session: Record<string, any>) {
    return this.authService.getUser(session.passport.user.username);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  loggingSomrhing(@Res({ passthrough: true }) res: Response) {
    return { check: true };
  }

  @Post('authenticated')
  @UseGuards(AuthenticatedGuard)
  isAuth(@Res({ passthrough: true }) res: Response) {
    return { check: true };
  }

  // @UseGuards(AtGuard)
  // @Post('logout')
  // logout(@GetCurrentUser('sub') userId: number) {
  //   return this.authService.logout(userId);
  // }

  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Get('/getme')
  getMe() {
    return { msg: 'you should see this now' };
  }

  @Post('reset')
  reset(@Body() dto: RecoveryDto) {
    return this.authService.resetPass(dto);
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout(() => {
      res.redirect('/');
    });
  }
}
