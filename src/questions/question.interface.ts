export interface Question {
  topic: string;
  text: string;
  code?: {
    text: string;
    language: Language;
  };
  options: string[];
  answer: {
    index: number;
    explanation?: string;
  };
  userAnswer?: number | null;
}

export const languages = ['typescript', 'javascript', 'html', 'css'] as const;
type Language = (typeof languages)[number];
