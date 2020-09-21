import { useDispatch, useSelector } from 'react-redux';
import { DATAS, getKeyBySentence } from './migration01.helpers';
import { updateWholeTriage } from '../../../store/actions/triage';
import { updateWholeUser } from '../../../store/actions/user';
import { updateWholeRiskTest } from '../../../store/actions/riskTest';
import { MIGRATIONS } from '../migrations.constants';
import { finishMigration } from '../../../store/actions/app';
import { getUser } from '../../../store/selectors/user';
import { getTriage } from '../../../store/selectors/triage';
import { getRiskTest } from '../../../store/selectors/riskTest';

const useMigration01 = () => {
  const dispatch = useDispatch();
  const triage = useSelector(getTriage);
  const user = useSelector(getUser);
  const riskTests = useSelector(getRiskTest);

  const prepareSerious = serious => {
    return serious.map(item => {
      const { common_name, name } = item;
      return {
        ...item,
        common_name: getKeyBySentence(common_name, DATAS.USER_DATA),
        name: getKeyBySentence(name, DATAS.USER_DATA)
      };
    });
  };

  const migrateTriage = () => {
    const { description, serious } = triage;
    dispatch(
      updateWholeTriage({
        ...triage,
        description: getKeyBySentence(description, DATAS.DIAGNOSIS_DATA),
        serious: [...prepareSerious(serious)]
      })
    );
  };

  const prepareChronicSicks = (chronicSicks = []) => {
    return chronicSicks.map(item => {
      const { name } = item;
      return {
        ...item,
        name: getKeyBySentence(name, DATAS.USER_DATA)
      };
    });
  };

  const migrateUser = () => {
    const { smokeNumber, chronicSicks } = user;
    dispatch(
      updateWholeUser({
        ...user,
        smokeNumber: getKeyBySentence(smokeNumber, DATAS.USER_DATA),
        chronicSicks: [...prepareChronicSicks(chronicSicks)]
      })
    );
  };

  const prepareChoices = choices =>
    choices.map(({ id }) => ({ id, label: id === 'present' ? 'yes' : 'no' }));

  const prepareQuestionsItems = items => {
    return items.map(item => {
      const { choices, name } = item;
      return {
        ...item,
        name: getKeyBySentence(name, DATAS.RISK_TEST_DATA),
        choices: [...prepareChoices(choices)],
        explanation: null
      };
    });
  };

  const prepareAllQuestions = allQuestions => {
    return allQuestions.map(item => {
      const { items, name, text } = item;
      return {
        ...item,
        items: [...prepareQuestionsItems(items)],
        text: getKeyBySentence(text, DATAS.RISK_TEST_DATA),
        name: getKeyBySentence(name, DATAS.RISK_TEST_DATA),
        explanation: null
      };
    });
  };

  const migrateRiskTest = () => {
    const riskTestes = Object.keys(riskTests)
      .map(value => {
        const riskTest = riskTests[value];
        const { description, allQuestions } = riskTest;
        return {
          [value]: {
            ...riskTest,
            label: null,
            description: getKeyBySentence(description, DATAS.RISK_TEST_DATA),
            allQuestions: [...prepareAllQuestions(allQuestions)]
          }
        };
      })
      .reduce((obj, item) => {
        return {
          ...obj,
          ...item
        };
      }, {});

    dispatch(updateWholeRiskTest(riskTestes));
  };

  const execute = () => {
    migrateTriage();
    migrateUser();
    migrateRiskTest();
    dispatch(finishMigration(MIGRATIONS.MIGRATION_01));
  };

  return { execute };
};

export default useMigration01;
