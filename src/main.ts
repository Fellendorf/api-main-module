import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { urlencoded, json } from 'express';

import { AppModule } from './app.module';
import { envUtils } from './utils/env.utils';

const PORT = envUtils.convertToNumber(process.env.PORT) || 3000;
const CORS_ENABLED =
  envUtils.convertToBoolean(process.env.CORS_ENABLED) || false;
const CORS_ORIGIN = envUtils.convertToArray(process.env.CORS_ORIGIN) || '*';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  if (CORS_ENABLED) {
    app.enableCors({ origin: CORS_ORIGIN });
  }
  await app.listen(PORT, () =>
    console.log(`quiz-api server listening on port ${PORT}`),
  );
}
bootstrap();
