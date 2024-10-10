export interface Question {
  topic: string;
  text: string;
  code?: Code;
  options: string[];
  answer: Answer;
}

export interface Code {
  text: string;
  language: Language;
}

export interface Answer {
  index: number;
  explanation?: string;
}

export const languages = ['typescript', 'javascript', 'html', 'css'] as const;
export type Language = (typeof languages)[number];
