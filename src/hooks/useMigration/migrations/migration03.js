import { useDispatch, useSelector } from 'react-redux';
import { MIGRATIONS } from '../migrations.constants';
import { finishMigration } from '../../../store/actions/app';
import { getRiskTest } from '../../../store/selectors/riskTest';
import { updateWholeRiskTest } from '../../../store/actions/riskTest';
import prepareRiskTestes from './migration03.helpers';

const useMigration03 = () => {
  const dispatch = useDispatch();
  const riskTests = useSelector(getRiskTest);

  const migrateRiskTest = () => {
    const riskTestes = prepareRiskTestes(riskTests);
    dispatch(updateWholeRiskTest(riskTestes));
  };

  const execute = () => {
    migrateRiskTest();
    dispatch(finishMigration(MIGRATIONS.MIGRATION_03));
  };

  return { execute };
};

export default useMigration03;
