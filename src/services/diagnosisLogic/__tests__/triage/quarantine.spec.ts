import query from './quarantineQuery.json';
import response from './quarantineResponse.json';
import { getTriage } from '../../triageLogic';

describe('return triage level quarantine', () => {
  it('should return quarantine 01', () => {
    // Given
    const data = query['01'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['01']);
  });
  it('should return quarantine 02', () => {
    // Given
    const data = query['02'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['02']);
  });
});
