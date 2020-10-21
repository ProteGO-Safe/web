import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MIGRATIONS } from './migrations.constants';
import useMigration01 from './migrations/migration01';
import useMigration02 from './migrations/migration02';
import useMigration03 from './migrations/migration03';

const useMigration = () => {
  const { migrations = [] } = useSelector(state => state.app);
  const { execute: executeMigration01 } = useMigration01();
  const { execute: executeMigration02 } = useMigration02();
  const { execute: executeMigration03 } = useMigration03();

  useEffect(() => {
    if (migrations && !migrations.includes(MIGRATIONS.MIGRATION_01)) {
      executeMigration01();
    }
    if (migrations && !migrations.includes(MIGRATIONS.MIGRATION_02)) {
      executeMigration02();
    }
    if (migrations && !migrations.includes(MIGRATIONS.MIGRATION_03)) {
      executeMigration03();
    }

    // eslint-disable-next-line
  }, []);
};

export default useMigration;
