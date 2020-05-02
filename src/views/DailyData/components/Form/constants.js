import {
  VALUE_SYMPTOM_LEVEL_1,
  VALUE_SYMPTOM_LEVEL_2,
  VALUE_SYMPTOM_LEVEL_3,
  VALUE_SYMPTOM_LEVEL_4
} from '../../../../constants';

export const marks = [
  {
    value: 1,
    label: 'Brak'
  },
  {
    value: 2,
    label: 'Słaby'
  },
  {
    value: 3,
    label: 'Umiarkowany'
  },
  {
    value: 4,
    label: 'Silny'
  }
];

export const levels = {
  [VALUE_SYMPTOM_LEVEL_1]: 'Brak',
  [VALUE_SYMPTOM_LEVEL_2]: 'Słaby',
  [VALUE_SYMPTOM_LEVEL_3]: 'Umiarkowany',
  [VALUE_SYMPTOM_LEVEL_4]: 'Silny'
};
