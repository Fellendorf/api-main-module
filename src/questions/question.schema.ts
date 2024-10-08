import { Schema } from 'mongoose';
import { languages, Question } from './question.interface';

export const QUESTION_MODEL_NAME = 'Question';

const COLLECTION_NAME = 'quiz-questions';

export const QuestionSchema = new Schema<Question>(
  {
    topic: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    code: {
      _id: false,
      required: false,
      type: {
        text: { type: String, required: true },
        language: {
          type: String,
          enum: languages,
          required: true,
          lowercase: true,
        },
      },
    },
    options: {
      type: [String],
      required: true,
    },
    answer: {
      _id: false,
      type: {
        index: { type: Number },
        explanation: { type: String, required: false },
      },
      required: true,
    },
  },
  {
    collection: COLLECTION_NAME,
  },
);
