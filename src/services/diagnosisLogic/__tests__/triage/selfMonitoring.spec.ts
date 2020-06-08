import query from './selfMonitoringQuery.json';
import response from './selfMonitoringResponse.json';
import { getTriage } from '../../triageLogic';

describe('return triage level self monitoring', () => {
  it('should return self monitoring 01', () => {
    // Given
    const data = query['01'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['01']);
  });
  it('should return self monitoring 02', () => {
    // Given
    const data = query['02'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['02']);
  });
  it('should return self monitoring 03', () => {
    // Given
    const data = query['03'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['03']);
  });
  it('should return self monitoring 04', () => {
    // Given
    const data = query['04'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['04']);
  });
  it('should return self monitoring 05', () => {
    // Given
    const data = query['05'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['05']);
  });
  it('should return self monitoring 06', () => {
    // Given
    const data = query['06'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['06']);
  });
});
