import query from './noRiskQuery.json';
import response from './noRiskResponse.json';
import { getTriage } from '../../triageLogic';

describe('return triage level no risk', () => {
  it('should return no risk 01', () => {
    // Given
    const data = query['01'];

    // When
    const nextQuestion = getTriage(data);

    // Then
    expect(nextQuestion).toEqual(response['01']);
  });
});
