import prepareRiskTestes from '../migration03.helpers';
import { expectedRiskTest, riskTestInStore } from './test.data';

describe('migrations', () => {
  it('should create risk test data for migration3', () => {
    const preparedRiskTest = prepareRiskTestes(riskTestInStore);

    expect(preparedRiskTest).toEqual(expectedRiskTest);
  });
});
