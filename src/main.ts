import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { envUtils } from './utils/env.utils';

const CORS_ENABLED =
  envUtils.convertToBoolean(process.env.CORS_ENABLED) || false;
const CORS_ORIGIN = envUtils.convertToArray(process.env.CORS_ORIGIN) || '*';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (CORS_ENABLED) {
    app.enableCors({ origin: CORS_ORIGIN });
  }
  await app.listen(3000);
}
bootstrap();
