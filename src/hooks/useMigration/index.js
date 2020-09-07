import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MIGRATIONS } from './migrations.constants';
import useMigration01 from './migrations/migration01';

const useMigration = () => {
  const { migrations = [] } = useSelector(state => state.app);
  const { execute: executeMigration01 } = useMigration01();

  useEffect(() => {
    if (migrations && !migrations.includes(MIGRATIONS.MIGRATION_01)) {
      executeMigration01();
    }
    // eslint-disable-next-line
  }, []);
};

export default useMigration;
