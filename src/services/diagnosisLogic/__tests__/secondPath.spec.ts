import { getDiagnosis } from '../diagnosisLogic';
import firstAnswer from './responses/responses.json';
import query from './query/query.json';

describe('Second diagnosi path', () => {
  it('should return first question', () => {
    // Given
    const data = query.fever_cought;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.faver_cought);
  });

  it('should return next question after temperature answer', () => {
    // Given
    const data = query.temperature;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.temperature);
  });

  it('should return next question after rapidly question', () => {
    // Given
    const data = query.rapidly;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.rapidly);
  });

  it('should return next question after fast breathing answer', () => {
    // Given
    const data = query.fast_breatching;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.fast_breatching);
  });

  it('should return next question after blood answer', () => {
    // Given
    const data = query.no_blood;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.no_blood);
  });

  it('should return next question after symptoms answer', () => {
    // Given
    const data = query.symptoms_true;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.symptoms_true);
  });

  it('should return next question after symptoms answer with no', () => {
    // Given
    const data = query.symptoms_false;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.symptoms_true);
  });

  it('should return end of path', () => {
    // Given
    const data = query.travel;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.end);
  });

  it('should return end of no travel', () => {
    // Given
    const data = query.travel_no;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.contact);
  });

  it('should end path with no travel', () => {
    // Given
    const data = query.end_travel_no;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.end);
  });
});
