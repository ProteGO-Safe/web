import { useDispatch, useSelector } from 'react-redux';
import { MIGRATIONS } from '../migrations.constants';
import { finishMigration } from '../../../store/actions/app';
import { getUserName } from '../../../store/selectors/user';
import { finishRegistration, saveUserName } from '../../../store/actions/user';

const translatedUserNamesToChangeToNull = ['Użytkowniku', 'User', 'Користувач'];

const useMigration02 = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const migrateRiskTest = () => {
    if (!userName) {
      return;
    }
    if (translatedUserNamesToChangeToNull.includes(userName)) {
      dispatch(saveUserName({ name: null }));
    } else {
      dispatch(finishRegistration());
    }
  };

  const execute = () => {
    migrateRiskTest();
    dispatch(finishMigration(MIGRATIONS.MIGRATION_02));
  };

  return { execute };
};

export default useMigration02;
