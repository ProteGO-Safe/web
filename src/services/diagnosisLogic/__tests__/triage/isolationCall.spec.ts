import query from './isolationCallQuery.json';
import response from './isolationCallResponse.json';
import { getTriage } from '../../triageLogic';

describe('return triage level isolation call', () => {
  it('should return isolation call 01', () => {
    // Given
    const data = query['01'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['01']);
  });
  it('should return isolation call 02', () => {
    // Given
    const data = query['02'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['02']);
  });
  it('should return isolation call 03', () => {
    // Given
    const data = query['03'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['03']);
  });
  it('should return isolation call 04', () => {
    // Given
    const data = query['04'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['04']);
  });
  it('should return isolation call 05', () => {
    // Given
    const data = query['05'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['05']);
  });
  it('should return isolation call 06', () => {
    // Given
    const data = query['06'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['06']);
  });
  it('should return isolation call 07', () => {
    // Given
    const data = query['07'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['07']);
  });
  it('should return isolation call 08', () => {
    // Given
    const data = query['08'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['08']);
  });
  it('should return isolation call 09', () => {
    // Given
    const data = query['09'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['09']);
  });
});
