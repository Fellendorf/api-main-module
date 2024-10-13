import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { QuestionsModule } from '@fellendorf/api-quiz-questions-module';
import { mongoUtils } from './utils/mongo.utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(mongoUtils.getMongoUrl(process.env)),
    QuestionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
