import { QueryObject, Decisions, FINISH_FLAG } from './diagnosis.types';
import {
  findEvidenceByIds,
  hasPresentAnyLocation,
  isAbsent,
  isPresent
} from './evidenceFinder';

const decisions: Decisions = {
  p24: () => 's2',
  s2: ({ evidence }: QueryObject) => {
    const [fever, cough, shortnessBreath] = findEvidenceByIds(evidence, [
      's_0',
      's_1',
      's_2'
    ]);
    if (isAbsent(fever) && isAbsent(cough) && isAbsent(shortnessBreath)) {
      return 's24';
    }
    if (isPresent(fever) && isPresent(cough) && isAbsent(shortnessBreath)) {
      return 's5';
    }
    if (isPresent(fever) && isPresent(cough) && isPresent(shortnessBreath)) {
      return 's5';
    }
    if (isPresent(fever) && isAbsent(cough) && isAbsent(shortnessBreath)) {
      return 's5';
    }
    if (isAbsent(fever) && isPresent(cough) && isAbsent(shortnessBreath)) {
      return 's12';
    }
    if (isAbsent(fever) && isAbsent(cough) && isPresent(shortnessBreath)) {
      return 's12';
    }
    if (isAbsent(fever) && isPresent(cough) && isPresent(shortnessBreath)) {
      return 's12';
    }
    if (isPresent(fever) && isAbsent(cough) && isPresent(shortnessBreath)) {
      return 's5';
    }
    return 's5';
  },
  p15: () => FINISH_FLAG,
  s24: ({ evidence }: QueryObject) => {
    const [fever, cough] = findEvidenceByIds(evidence, ['s_0', 's_1']);
    if (isPresent(fever) && isPresent(cough)) {
      return 'p5';
    }
    return 'p15';
  },
  s5: () => 's12',
  s12: () => 's13',
  s13: () => 's14',
  s14: ({ evidence }: QueryObject) => {
    const [
      fever,
      shortnessBreath,
      feverTemp,
      rapidly,
      fastBreathing,
      bloodCough
    ] = findEvidenceByIds(evidence, [
      's_0',
      's_2',
      's_4',
      's_12',
      's_13',
      's_14'
    ]);
    if (
      isPresent(fever) &&
      isPresent(feverTemp) &&
      isAbsent(rapidly) &&
      isAbsent(fastBreathing) &&
      isAbsent(bloodCough)
    ) {
      return 's24';
    }
    if (
      isPresent(feverTemp) ||
      isPresent(rapidly) ||
      isPresent(fastBreathing) ||
      isPresent(bloodCough)
    ) {
      return FINISH_FLAG;
    }

    if (isPresent(fever) && isPresent(shortnessBreath)) {
      return FINISH_FLAG;
    }

    return 's24';
  },
  p5: ({ evidence }: QueryObject) => {
    if (hasPresentAnyLocation(evidence)) {
      return FINISH_FLAG;
    }
    return 'p15';
  }
};

export default decisions;
