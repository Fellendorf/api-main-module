import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  QUESTION_MODEL_NAME,
  QuestionSchema,
} from 'src/questions/question.schema';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QUESTION_MODEL_NAME, schema: QuestionSchema },
    ]),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
