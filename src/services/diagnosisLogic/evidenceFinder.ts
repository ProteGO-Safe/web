import { AnswerOption, Evidence } from './diagnosis.types';

export const findEvidenceByIds = (
  evidences: Evidence[],
  ids: string[]
): Array<Evidence | undefined> => {
  return ids.map(id => {
    return evidences.find(evidence => evidence.id === id);
  });
};

export const isPresent = (evidence?: Evidence) => {
  if (!evidence) {
    return false;
  }
  return evidence.choice_id === AnswerOption.PRESENT;
};

export const isAbsent = (evidence?: Evidence) => {
  if (!evidence) {
    return false;
  }
  return evidence.choice_id === AnswerOption.ABSENT;
};
