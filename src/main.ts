import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
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
  if (CORS_ENABLED) {
    app.enableCors({ origin: CORS_ORIGIN });
  }
  await app.listen(PORT, () =>
    console.log(`quiz-api server listening on port ${PORT}`),
  );
}
bootstrap();
