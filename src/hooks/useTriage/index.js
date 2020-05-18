import { useSelector } from 'react-redux';
import { TRIAGE_LEVEL } from './triageLevel.constants';

const useTriage = () => {
  const { triageLevel, description, serious } = useSelector(
    state => state.triage
  );

  const { color, content, icon, riskGroup } = TRIAGE_LEVEL[triageLevel];

  const isDangerous =
    triageLevel &&
    !(triageLevel === 'no_risk' || triageLevel === 'self_monitoring');
  return { color, content, description, icon, isDangerous, riskGroup, serious };
};

export default useTriage;
