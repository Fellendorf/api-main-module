import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/createQuestion.dto';

@Controller()
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('questions')
  getQuestions() {
    return this.questionsService.getQuestions();
  }

  @Get('topics')
  getTopics() {
    return this.questionsService.getTopics();
  }

  @Post('question')
  @UsePipes(new ValidationPipe())
  createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.createQuestion(createQuestionDto);
  }
}
