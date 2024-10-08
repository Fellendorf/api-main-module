import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { mongoUtils } from './utils/mongo.utils';
import { QuestionsModule } from './questions/questions.module';

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
