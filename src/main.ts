import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

const CORS_ENABLED = Boolean(process.env.CORS_ENABLED) || false;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  if (CORS_ENABLED) {
    app.enableCors({ origin: CORS_ORIGIN });
  }
  await app.listen(3000);
}
bootstrap();
