import { getDiagnosis } from '../diagnosisLogic';
import firstAnswer from './responses/responses.json';
import query from './query/query.json';

describe('Second diagnosi path', () => {
  it('should return temperture question', () => {
    // Given
    const data = query.fever_shortness;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.fever_shortness);
  });

  it('should return end of path question', () => {
    // Given
    const data = query.fever_shortness_nothing_else;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.end);
  });

  it('should not return temperature when fever is not checked', () => {
    // Given
    const data = query.no_fever;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.no_fever);
  });

  it('should return symptoms question at the end', () => {
    // Given
    const data = query.no_fever_nothing_else;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.no_fever_nothing_else);
  });

  it('should return correct answer whenquestion is multisingle_type', () => {
    // Given
    const data = query.multi_single;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.multi_single);
  });
});
