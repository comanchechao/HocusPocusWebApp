/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import * as Redis from 'redis';

import { REDIS } from './redis.constant';

const url = process.env.REDIS_URL || 'redis://localhost:6379';

@Module({
  providers: [
    {
      provide: REDIS,
      useValue: Redis.createClient({ url }),
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
