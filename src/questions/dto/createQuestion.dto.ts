import { Question } from 'src/questions/question.interface';

export class CreateQuestionDto implements Question {
  topic: string;

  text: string;

  code?: {
    text: string;
    language: 'typescript' | 'javascript' | 'html' | 'css';
  };

  options: string[];

  answer: {
    index: number;
    explanation?: string;
  };
}
