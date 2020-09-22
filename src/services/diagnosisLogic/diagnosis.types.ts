export interface OptionObject {
  choices: Choices[];
  explanation: string | null;
  id: string;
  name: string;
}

export interface RawQuestionObject extends QuestionObject {
  id: string | string[];
}

export interface QuestionObject {
  conditions: string[];
  extras: {};
  question: {
    explanation: string | null;
    extras: {};
    text: string;
    type: string;
    items: OptionObject[];
  };
}
export interface Evidence {
  id: string;
  choice_id: string;
}

export interface QueryObject {
  isElderly: boolean;
  evidence: Evidence[];
}

interface Choices {
  id: string;
  label: string;
}

export interface Decisions {
  [key: string]: (data: QueryObject) => string;
}

export enum AnswerOption {
  PRESENT = 'present',
  ABSENT = 'absent'
}

export const FINISH_FLAG = 'finish';
