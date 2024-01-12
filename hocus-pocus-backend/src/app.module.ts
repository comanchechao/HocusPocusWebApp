/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { ManagementModule } from './management/management.module';
import { VideosModule } from './videos/videos.module';
import { CommentsModule } from './comments/comments.module';
import { VideoCommentsModule } from './video-comments/video-comments.module';
import { MembershipModule } from './membership/membership.module';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { FiltersModule } from './filters/filters.module';
import { PaymentRecordsModule } from './payment-records/payment-records.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({}),
    PassportModule,
    UserModule,
    AuthModule,
    PrismaModule,
    ProductsModule,
    OrdersModule,
    ManagementModule,
    VideosModule,
    CommentsModule,
    VideoCommentsModule,
    MembershipModule,
    FiltersModule,
    PaymentRecordsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
