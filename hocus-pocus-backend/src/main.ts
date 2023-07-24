/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET, PUT, POST, DELETE , OPTIONS',
    allowedHeaders: '*',
    preflightContinue: false,
    credentials: true,
  });
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
