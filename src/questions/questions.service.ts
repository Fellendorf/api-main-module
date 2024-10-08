import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { Question } from 'src/questions/question.interface';
import { QUESTION_MODEL_NAME } from './question.schema';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(QUESTION_MODEL_NAME)
    private readonly questionModel: Model<Question>,
  ) {}

  public async getQuestions(topic?: string): Promise<Question[]> {
    return this.questionModel.find();
  }

  public async getTopics(): Promise<string[]> {
    return this.questionModel.distinct('topic');
  }

  public async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const newQuestion = new this.questionModel(createQuestionDto);
    return newQuestion.save();
  }
}
