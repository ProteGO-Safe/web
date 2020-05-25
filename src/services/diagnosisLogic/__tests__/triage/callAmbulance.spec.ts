import query from './callAmbulanceQuery.json';
import response from './callAmbulanceResponse.json';
import { getTriage } from '../../triageLogic';

describe('return triage level call ambulance', () => {
  it('should return call ambulance 01', () => {
    // Given
    const data = query['01'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['01']);
  });
  it('should return call ambulance 02', () => {
    // Given
    const data = query['02'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['02']);
  });
  it('should return call ambulance 03', () => {
    // Given
    const data = query['03'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['03']);
  });
  it('should return call doctor 04', () => {
    // Given
    const data = query['04'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['04']);
  });
  it('should return call doctor 05', () => {
    // Given
    const data = query['05'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['05']);
  });
  it('should return call doctor 06', () => {
    // Given
    const data = query['06'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['06']);
  });
  it('should return call doctor 07', () => {
    // Given
    const data = query['07'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['07']);
  });
  it('should return call doctor 08', () => {
    // Given
    const data = query['08'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['08']);
  });
  it('should return call doctor 09', () => {
    // Given
    const data = query['09'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['09']);
  });
  it('should return call doctor 10', () => {
    // Given
    const data = query['10'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['10']);
  });
  it('should return call doctor 11', () => {
    // Given
    const data = query['11'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['11']);
  });
});
