import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  Answer,
  Code,
  Language,
  languages,
  Question,
} from 'src/questions/question.interface';

class AnswerDTO implements Answer {
  @IsNumber()
  index: number;

  @IsOptional()
  @IsString()
  explanation?: string;
}

class CodeDTO implements Code {
  @IsString()
  text: string;

  @IsString()
  @IsEnum(languages, {
    message: `language must be one of the following values: "${languages.join('", "')}"`,
  })
  language: Language;
}

export class CreateQuestionDto implements Question {
  @IsString()
  topic: string;

  @IsString()
  text: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => CodeDTO)
  code?: CodeDTO;

  @IsArray()
  @IsString({ each: true })
  options: string[];

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => AnswerDTO)
  answer: AnswerDTO;
}
