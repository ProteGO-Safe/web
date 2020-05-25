import steps from './steps.json';
import decisions from './decisions';
import { RawQuestionObject, QueryObject, FINISH_FLAG } from './diagnosis.types';

enum SpecialQuestion {
  BEGIN = 'p22'
}

const END_OF_PATH_RESPONSE = {
  conditions: [],
  extras: {},
  question: null,
  should_stop: true
};

const getQuestionById = (id: string): RawQuestionObject => {
  const rawValues = steps.find(question => {
    if (Array.isArray(question.id)) {
      return question.id.includes(id);
    }
    return question.id === id;
  });
  if (!rawValues) {
    throw new Error(`Step not found. Id: ${id}`);
  }
  return rawValues;
};

const getQuestionId = (query: QueryObject) => {
  const lastAnswer = query.evidence[query.evidence.length - 1];
  const questionId = lastAnswer.id.split('_').join('');
  const question = getQuestionById(questionId);
  return question.id;
};

const getDecision = (decisionId: string | string[], query: QueryObject) => {
  if (Array.isArray(decisionId)) {
    const lastId = decisionId[decisionId.length - 1];
    const decisionFunction = decisions[lastId];
    return decisionFunction(query);
  }
  const decisionFunction = decisions[decisionId];
  return decisionFunction(query);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clearRawData = ({ id, ...restData }: RawQuestionObject) => ({
  ...restData
});

const getNextQuestion = (query: QueryObject) => {
  const questionId = getQuestionId(query);
  const nextQuestionId = getDecision(questionId, query);
  if (nextQuestionId === FINISH_FLAG) {
    return END_OF_PATH_RESPONSE;
  }

  const nextQuestion = getQuestionById(nextQuestionId);
  return clearRawData(nextQuestion);
};

const getFirstQuestion = () => {
  const rawData = getQuestionById(SpecialQuestion.BEGIN);
  return {
    ...clearRawData(rawData),
    should_stop: false
  };
};

export const getDiagnosis = (query: QueryObject) => {
  if (!query.sex || !query.age) {
    throw new Error('sex and age are required');
  }
  if (!query.evidence.length) {
    return getFirstQuestion();
  }
  return getNextQuestion(query);
};
