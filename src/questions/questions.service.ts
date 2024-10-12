import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from 'src/questions/question.interface';
import { QUESTION_MODEL_NAME } from './question.schema';

type QuestionFilter = {
  topic?: {
    $in: string[];
  };
};

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(QUESTION_MODEL_NAME)
    private readonly questionModel: Model<Question>,
  ) {}

  public async getQuestions(
    topics?: string[],
    count: number = 10,
  ): Promise<Question[]> {
    const filter: QuestionFilter = {};
    if (topics?.length > 0) {
      filter.topic = { $in: topics };
    }
    return this.questionModel.aggregate([
      { $match: filter },
      { $sample: { size: count } },
    ]);
  }

  public async getTopics(): Promise<string[]> {
    return this.questionModel.aggregate([
      { $group: { _id: '$topic', count: { $count: {} } } },
      { $project: { _id: 0, name: '$_id', questionCount: '$count' } },
    ]);
  }

  public async createQuestion(
    newQuestion: CreateQuestionDto,
  ): Promise<Question> {
    const questionDocument = new this.questionModel(newQuestion);
    return questionDocument.save();
  }
}
