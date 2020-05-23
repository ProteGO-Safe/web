import { getDiagnosis } from '../diagnosisLogic';
import firstAnswer from './responses/responses.json';
import query from './query/query.json';

describe('First diagnosi path with no sympoms', () => {
  it('should return disease question', () => {
    // Given
    const data = { sex: 'Female', age: 30, evidence: [] };

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.disease);
  });

  it('should return symptoms question', () => {
    // Given
    const data = query.symptoms;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.symptoms);
  });

  it('should return nonspecific symptoms question', () => {
    // Given
    const data = query.nonspecificSymptoms;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.nonspecificSymptoms);
  });

  it('should return contact question', () => {
    // Given
    const data = query.contact;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.contact);
  });

  it('should return contact with fatique symptom', () => {
    // Given
    const data = query.fatique;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.contact);
  });

  it('should return end of path', () => {
    // Given
    const data = query.end;

    // When
    const nextQuestion = getDiagnosis(data);

    // Then
    expect(nextQuestion).toEqual(firstAnswer.end);
  });
});
