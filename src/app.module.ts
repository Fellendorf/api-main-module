import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicsController } from './controllers/topics/topics.controller';

@Module({
  imports: [],
  controllers: [AppController, TopicsController],
  providers: [AppService],
})
export class AppModule {}
